# Stripe Webhook Signature Verification - Troubleshooting Guide

## 🎯 The Problem We Solved

Stripe webhook signature verification was failing with 400 errors despite having the correct webhook secret configured. This comprehensive guide documents the root cause and exact solution for future implementations.

## 🔍 Root Cause Analysis

### Issue #1: Corrupted Environment Variable
The `STRIPE_WEBHOOK_SECRET` environment variable in Vercel contained hidden characters that broke signature verification:

**What we found:**
```bash
# When we pulled the env var from Vercel:
STRIPE_WEBHOOK_SECRET="whsec_1OgeWBt4VlqCAp8TTclYalcOrtgD1KO6\n"
                                                               ^^
# Literal \n characters at the end!

# Character-by-character analysis showed:
- Position 37-38: \ n (backslash + n, not a newline)
- This corrupted the signature verification
```

**How it happened:**
- Using `echo` to pipe the secret to `vercel env add` added literal `\n` characters
- The secret displayed differently in different tools (Stripe dashboard vs Vercel)
- Character case mismatch: `1Ogew` in Vercel vs `1QGew` in Stripe (O vs Q)

### Issue #2: Raw Body Parsing in Next.js + Vercel
Stripe signature verification requires the **exact raw body** as received. Any modification breaks the signature.

**Original implementation issues:**
```typescript
// ❌ WRONG - Using Readable stream with async iteration
import { Readable } from 'stream';

async function getRawBody(req: NextApiRequest): Promise<Buffer> {
  const stream = req as unknown as Readable;
  for await (const chunk of stream) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}
```

This approach had timing and encoding issues that could corrupt the body.

## ✅ The Complete Solution

### Step 1: Fix the Body Parser

**Improved implementation:**
```typescript
// ✅ CORRECT - Promise-based event listener approach
async function getRawBody(req: NextApiRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    
    req.on('data', (chunk: Buffer) => {
      chunks.push(chunk);
    });
    
    req.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    
    req.on('error', (err) => {
      reject(err);
    });
  });
}

// CRITICAL: Disable body parsing
export const config = {
  api: {
    bodyParser: false,
  },
  runtime: 'nodejs',
};
```

**Why this works:**
- Event listeners capture the raw buffer directly from the HTTP stream
- No encoding transformations
- Proper promise handling ensures all data is received before processing
- `bodyParser: false` prevents Next.js from preprocessing the body

### Step 2: Clean the Webhook Secret

**Always trim the secret in your handler:**
```typescript
// Get and clean the webhook secret (remove any whitespace/newlines)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

// Verify it exists
if (!webhookSecret) {
  console.error('❌ STRIPE_WEBHOOK_SECRET not configured');
  return res.status(500).json({ error: 'Webhook secret not configured' });
}

// Use it for verification
const sigStr = Array.isArray(signature) ? signature[0] : signature;
event = stripe.webhooks.constructEvent(rawBody, sigStr, webhookSecret);
```

### Step 3: Set Environment Variables Correctly

**❌ WRONG - Using echo (adds newline):**
```bash
echo "whsec_YOUR_SECRET" | vercel env add STRIPE_WEBHOOK_SECRET production
# Results in: "whsec_YOUR_SECRET\n"
```

**✅ CORRECT - Using printf (no newline):**
```bash
printf "whsec_YOUR_SECRET" | vercel env add STRIPE_WEBHOOK_SECRET production
# Results in: "whsec_YOUR_SECRET"
```

**Verification command:**
```bash
# Pull the environment variable
vercel env pull .env.verify --environment=production

# Check for hidden characters
cat .env.verify | grep STRIPE_WEBHOOK_SECRET | od -c

# Look for the secret ending cleanly:
# Should see: ... K   O   6   "  \n
# NOT:        ... K   O   6   \   n   "  \n
```

### Step 4: Create Fresh Webhook Endpoint

If the secret is still problematic, create a completely new webhook endpoint:

```bash
# Create new webhook endpoint via Stripe CLI
stripe webhook_endpoints create \
  --url="https://yourdomain.com/api/stripe/webhook" \
  --enabled-events="*" \
  --api-version="2025-12-15.clover"

# Response includes the secret:
{
  "id": "we_xxxxxxxxxxxxx",
  "secret": "whsec_NEW_CLEAN_SECRET",
  ...
}

# Add to Vercel using printf
printf "whsec_NEW_CLEAN_SECRET" | vercel env add STRIPE_WEBHOOK_SECRET production

# Deploy to pick up new env var
vercel --prod

# Disable old webhook endpoint
stripe webhook_endpoints update we_OLD_ID --disabled
```

## 🧪 Testing & Verification

### Test 1: Verify Environment Variable
Create a temporary test endpoint:

```typescript
// src/pages/api/test-webhook-secret.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  
  return res.status(200).json({
    hasSecret: !!secret,
    length: secret?.length,
    firstChars: secret?.substring(0, 15),
    lastChars: secret?.substring(secret.length - 10),
    trimmedLength: secret?.trim().length,
    hasNewline: secret?.includes('\n'),
    hasCarriageReturn: secret?.includes('\r'),
    charCodes: secret ? Array.from(secret).map(c => c.charCodeAt(0)) : []
  });
}
```

Deploy and check:
```bash
curl -s https://yourdomain.com/api/test-webhook-secret | jq '.'
```

**Expected output:**
```json
{
  "hasSecret": true,
  "length": 38,
  "trimmedLength": 38,
  "hasNewline": false,
  "hasCarriageReturn": false,
  "charCodes": [119, 104, 115, 101, 99, 95, ...]
}
```

### Test 2: Trigger Test Events
```bash
# Trigger a test event
stripe trigger checkout.session.completed

# Wait a few seconds, then check delivery status
stripe events list --limit 1 --type checkout.session.completed | grep "pending_webhooks"

# Should show:
# "pending_webhooks": 0  ✅ SUCCESS
# "pending_webhooks": 1  ❌ STILL FAILING
```

### Test 3: Check Stripe Dashboard
Navigate to: Stripe Dashboard → Developers → Webhooks → [Your Endpoint]

**Success indicators:**
- Status: 200 OK (green checkmark)
- Response time: < 5 seconds
- No retry attempts

**Failure indicators:**
- Status: 400 Bad Request (red X)
- Error: "Webhook signature verification failed"
- Multiple retry attempts scheduled

## 📋 Complete Implementation Checklist

Use this checklist for any new Stripe webhook implementation:

- [ ] **1. Code Setup**
  - [ ] Implement raw body parser using event listeners (not async iteration)
  - [ ] Set `bodyParser: false` in API route config
  - [ ] Set `runtime: 'nodejs'` in API route config
  - [ ] Trim webhook secret with `.trim()` before use
  - [ ] Add comprehensive logging for debugging

- [ ] **2. Stripe Configuration**
  - [ ] Create webhook endpoint in Stripe Dashboard or CLI
  - [ ] Select correct events: `checkout.session.completed`, `payment_intent.succeeded`
  - [ ] Set API version to match your Stripe SDK: `2025-12-15.clover`
  - [ ] Copy signing secret immediately (shown only once)

- [ ] **3. Environment Variables**
  - [ ] Use `printf` (not `echo`) to add webhook secret to Vercel
  - [ ] Verify no hidden characters using `od -c` command
  - [ ] Check secret length is exactly 38 characters for `whsec_` format
  - [ ] Redeploy after adding environment variable

- [ ] **4. Testing**
  - [ ] Create test endpoint to verify env var is clean
  - [ ] Trigger test events: `stripe trigger checkout.session.completed`
  - [ ] Verify `pending_webhooks: 0` in event response
  - [ ] Check Stripe Dashboard shows 200 OK responses
  - [ ] Remove test endpoint after verification

- [ ] **5. Production Verification**
  - [ ] Process a real test payment
  - [ ] Confirm webhook received in application logs
  - [ ] Verify downstream integration (e.g., GHL webhook) receives data
  - [ ] Monitor for any failed delivery attempts

## 🚨 Common Pitfalls to Avoid

1. **Using `echo` instead of `printf`**
   - Always use `printf` to avoid newline characters

2. **Not disabling body parser**
   - Must set `bodyParser: false` in API route config

3. **String encoding issues**
   - Use `Buffer` directly, never convert to string and back

4. **Copy-paste errors from dashboard**
   - Secret may include extra whitespace when copying
   - Always verify character-by-character if issues persist

5. **Stale deployments**
   - Environment variable changes require redeployment
   - Use `vercel --prod` to force new build

6. **Multiple webhook endpoints**
   - Disable old endpoints to avoid confusion
   - Only one endpoint should be active per environment

7. **API version mismatch**
   - Webhook API version should match SDK version
   - Specify explicitly when creating endpoint

## 📚 Key Resources

- [Stripe Webhook Signature Verification Docs](https://stripe.com/docs/webhooks/signatures)
- [Next.js API Routes: Disable Body Parsing](https://nextjs.org/docs/pages/building-your-application/routing/api-routes#custom-config)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Stripe CLI Reference](https://stripe.com/docs/stripe-cli)

## 💡 Success Metrics

Your webhook is working correctly when:
- ✅ `pending_webhooks: 0` on all triggered events
- ✅ Stripe Dashboard shows 200 OK responses
- ✅ No retry attempts scheduled
- ✅ Logs show "✅ Stripe webhook verified: {event.type}"
- ✅ Downstream systems (GHL) receive data correctly

---

**Last Updated:** January 13, 2026  
**Project:** Glory Regenerative Marketing  
**Issue Resolution:** Webhook signature verification failing with 400 errors  
**Final Status:** ✅ Resolved - All webhooks delivering successfully
