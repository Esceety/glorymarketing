# Payment System Implementation Guide

## Overview

This document describes the implementation of the Glory Regenerative voucher payment system, which integrates Stripe payments with GoHighLevel (GHL) CRM to process $103 voucher payments for knee and hip pain relief consultations.

## Architecture

### Payment Flow Sequence

```
1. GHL Trigger URL → 2. Payment Landing Page → 3. Stripe Checkout → 4. Payment Success
                                                         ↓
                                                    5. Webhook → 6. GHL Inbound Webhook
```

### Detailed Flow

1. **GHL Trigger URL**: Customer receives custom URL with contact information
   - Format: `http://localhost:3000/voucher-payment?contact_id={{contact.id}}&customer_email={{contact.email}}&customer_first_name={{contact.first_name}}&last_name={{contact.last_name}}`

2. **Payment Landing Page**: Displays personalized voucher offer with customer details
   - Captures URL parameters (contact_id, email, first name, last name)
   - Shows pricing breakdown ($100 voucher + $3 processing fee = $103 total)
   - Personalized greeting when first name is provided

3. **Create Checkout Session API**: Generates Stripe checkout session
   - Stores customer metadata (contact_id, email, first name, last name)
   - Includes customer name in product description for invoice clarity
   - Creates session with success/cancel URLs

4. **Stripe Checkout**: Secure payment processing
   - Customer enters payment details on Stripe-hosted page
   - Shows full product description including patient name
   - Processes $103 payment

5. **Webhook Handler**: Receives Stripe event and processes payment
   - Validates webhook signature (production) or bypasses (development)
   - Extracts payment and customer metadata
   - Forwards data to GHL inbound webhook

6. **GHL Inbound Webhook**: Updates CRM with payment confirmation
   - Receives payload with contact_id, email, first name, last name
   - Marks payment as completed in GHL system
   - Triggers appointment confirmation workflow

---

## File Structure

### Core Payment Files

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── voucher-payment/
│   │   │   ├── page.tsx                          # Payment landing page route
│   │   │   └── VoucherPaymentClient.tsx          # Main payment UI component
│   │   ├── payment-success/
│   │   │   ├── page.tsx                          # Success page route
│   │   │   └── PaymentSuccessClient.tsx          # Success confirmation UI
│   │   └── payment-cancelled/
│   │       ├── page.tsx                          # Cancelled page route
│   │       └── PaymentCancelledClient.tsx        # Cancellation UI
│   └── api/
│       └── stripe/
│           └── create-checkout-session/
│               └── route.ts                      # API: Create Stripe session
├── pages/
│   └── api/
│       └── stripe/
│           └── webhook.ts                        # API: Webhook handler (Pages Router)
├── components/
│   └── layout/
│       └── SiteHeader.tsx                        # Header with conditional navigation
├── config/
│   ├── payment.ts                                # Payment configuration
│   └── site.ts                                   # Site configuration
└── lib/
    ├── stripe.ts                                 # Stripe client initialization
    └── idempotency.ts                            # Prevents duplicate webhook processing
```

---

## Component Details

### 1. Payment Landing Page (`VoucherPaymentClient.tsx`)

**Purpose**: Displays voucher offer and initiates checkout

**Key Features**:
- Personalized greeting with customer first name
- Pricing breakdown showing base price + processing fee
- Security badges (Stripe verified, secure payment)
- Error handling for missing contact information
- Help section with clinic phone number

**URL Parameters**:
- `contact_id` (required): GHL contact identifier
- `customer_email` (optional): Customer's email address
- `customer_first_name` (optional): For personalized greeting
- `last_name` (optional): Customer's last name

**Flow**:
1. Captures URL query parameters
2. Displays personalized offer
3. On button click, calls create-checkout-session API
4. Redirects to Stripe Checkout

**Code Highlights**:
```typescript
// Captures URL parameters
const contactId = searchParams?.get('contact_id') || null;
const customerEmail = searchParams?.get('customer_email') || null;
const customerFirstName = searchParams?.get('customer_first_name') || null;
const customerLastName = searchParams?.get('last_name') || null;

// Creates checkout session
const response = await fetch('/api/stripe/create-checkout-session', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    contact_id: contactId,
    customer_email: customerEmail,
    customer_first_name: customerFirstName,
    customer_last_name: customerLastName
  }),
});
```

---

### 2. Create Checkout Session API (`create-checkout-session/route.ts`)

**Purpose**: Creates Stripe checkout session with customer metadata

**Request Body**:
```typescript
interface CreateCheckoutRequestBody {
  contact_id: string;         // Required
  customer_email?: string;    // Optional
  customer_first_name?: string;
  customer_last_name?: string;
}
```

**Metadata Stored**:
- `ghl_contact_id`: GHL contact identifier
- `customer_email`: Original GHL contact email
- `customer_first_name`: Customer's first name
- `customer_last_name`: Customer's last name
- `campaign_id`: Campaign identifier
- `campaign_name`: Campaign name
- `voucher_type`: Type of voucher
- `payment_page`: Source page
- `environment`: dev/staging/production

**Product Description Format**:
- With name: `"Patient: John Doe - Knee & Hip Pain Relief Assessment..."`
- Without name: `"Knee & Hip Pain Relief Assessment..."`

This ensures the invoice clearly identifies which patient the payment is for, even if someone else pays on their behalf.

**Response**:
```json
{
  "url": "https://checkout.stripe.com/c/pay/cs_test_..."
}
```

---

### 3. Webhook Handler (`pages/api/stripe/webhook.ts`)

**Purpose**: Receives Stripe events and forwards payment data to GHL

**Important Notes**:
- Uses **Pages Router** (not App Router) for better body parsing control
- **Development Mode**: Skips signature verification due to Next.js 16 Turbopack bug
- **Production Mode**: Full signature verification enabled

**Signature Verification**:
```typescript
if (process.env.NODE_ENV === 'development' || process.env.SKIP_STRIPE_SIGNATURE_CHECK === 'true') {
  console.warn('⚠️ DEVELOPMENT MODE: Skipping Stripe signature verification');
  event = JSON.parse(rawBody.toString()) as Stripe.Event;
} else {
  // Production: Verify signature
  event = stripe.webhooks.constructEvent(
    rawBody,
    signature as string,
    process.env.STRIPE_WEBHOOK_SECRET!
  );
}
```

**Events Handled**:
- `checkout.session.completed`: Payment successful

**GHL Webhook Payload**:
```typescript
{
  contact_id: string,
  contact_email: string,
  contact_first_name: string,
  contact_last_name: string,
  payment_status: 'paid',
  payment_amount: number,          // In dollars
  payment_amount_cents: number,    // In cents
  payment_currency: string,
  payment_provider: 'stripe',
  campaign_id: string,
  campaign_name: string,
  voucher_type: string,
  stripe_event_id: string,
  stripe_session_id: string,
  stripe_payment_intent_id: string,
  payer_email: string,             // Email entered at Stripe checkout
  payer_name: string,              // Name entered at Stripe checkout
  paid_at: string,                 // ISO timestamp
  environment: string
}
```

**Idempotency**:
- Uses `hasProcessed()` and `markProcessed()` to prevent duplicate processing
- Tracks events by `event.id` in memory (production should use Redis/database)

---

### 4. Payment Success Page (`PaymentSuccessClient.tsx`)

**Purpose**: Confirms payment and sets expectations for next steps

**Content**:
- Success message with checkmark icon
- "What Happens Next" section:
  1. Pre-consultation email (within 24 hours)
  2. Appointment confirmation call
  3. Arrival instructions
- Clinic contact information: +1 (813) 970-7371
- No navigation buttons (logo only header)

---

### 5. Payment Cancelled Page (`PaymentCancelledClient.tsx`)

**Purpose**: Handles cancelled checkout sessions

**Features**:
- Friendly message explaining cancellation
- "Try Again" button to restart payment
- Help section with contact information

---

## Configuration

### Environment Variables (`.env.local`)

```bash
# =======================
# Site Configuration
# =======================
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# =======================
# Stripe Configuration
# =======================
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Optional: Use specific Price ID
STRIPE_PRICE_ID=

# =======================
# GHL Webhook
# =======================
GHL_INBOUND_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...

# =======================
# Payment Campaign Details
# =======================
PAYMENT_CAMPAIGN_ID=glory_regen_voucher_2026
PAYMENT_CAMPAIGN_NAME=Glory Regenerative Voucher
PAYMENT_VOUCHER_TYPE=new_patient_consult
PAYMENT_AMOUNT_CENTS=10300          # $103.00 (includes 3% processing fee)
PAYMENT_CURRENCY=usd
```

### Payment Configuration (`config/payment.ts`)

```typescript
export const paymentConfig = {
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
  stripePublishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
  stripePriceId: process.env.STRIPE_PRICE_ID || '',
  ghlInboundWebhookUrl: process.env.GHL_INBOUND_WEBHOOK_URL || '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  campaignId: process.env.PAYMENT_CAMPAIGN_ID || 'glory_regen_voucher_2026',
  campaignName: process.env.PAYMENT_CAMPAIGN_NAME || 'Glory Regenerative Voucher',
  voucherType: process.env.PAYMENT_VOUCHER_TYPE || 'new_patient_consult',
  amountCents: parseInt(process.env.PAYMENT_AMOUNT_CENTS || '10300', 10),
  currency: process.env.PAYMENT_CURRENCY || 'usd',
  environment: process.env.NODE_ENV || 'development',
};
```

---

## Payment Details

### Pricing Structure

| Item | Amount |
|------|--------|
| Voucher Payment | $100.00 |
| Processing Fee (3%) | $3.00 |
| **Total Due** | **$103.00** |

**Rationale**: The 3% processing fee covers Stripe transaction costs and is transparently disclosed to customers with industry-standard language.

### Pricing Transparency

The payment landing page shows:
- Regular value: ~~$450~~ (crossed out)
- Line-item breakdown of voucher + processing fee
- Clear total amount
- Explanation: "A standard processing fee covers secure payment handling and transaction costs."

---

## Testing

### Local Development Testing

1. **Start development server**:
   ```bash
   npm run dev
   ```

2. **Start Stripe CLI webhook forwarding**:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
   Copy the webhook signing secret and update `STRIPE_WEBHOOK_SECRET` in `.env.local`

3. **Test URL**:
   ```
   http://localhost:3000/voucher-payment?contact_id=test_123&customer_email=test@example.com&customer_first_name=John&last_name=Doe
   ```

4. **Test card numbers**:
   - Success: `4242 4242 4242 4242`
   - Requires authentication: `4000 0025 0000 3155`
   - Declined: `4000 0000 0000 0002`

### Production Testing

1. Update `.env.local` to use production Stripe keys
2. Update `STRIPE_WEBHOOK_SECRET` with production webhook secret from Stripe Dashboard
3. Deploy to Vercel/Netlify
4. Configure webhook endpoint in Stripe Dashboard: `https://yourdomain.com/api/stripe/webhook`
5. Test with real payment methods in live mode

---

## Key Features

### 1. Personalization
- Personalized greeting using customer's first name
- Patient name included in Stripe invoice description
- Ensures payment traceability even when paid by others

### 2. Metadata Tracking
- Full customer data (contact_id, email, first name, last name) stored in Stripe metadata
- Survives through entire payment lifecycle
- Forwarded to GHL for CRM record matching

### 3. Idempotency
- Prevents duplicate webhook processing
- Uses event ID tracking
- Returns 200 status for already-processed events

### 4. Error Handling
- Validates required contact_id parameter
- Displays user-friendly error messages
- Provides help section with contact information
- Graceful fallbacks for missing optional data

### 5. Security
- HTTPS enforced in production
- Stripe signature verification (production mode)
- PCI compliance through Stripe Checkout
- No sensitive data stored locally

### 6. Mobile Responsive
- Fully responsive design
- Touch-friendly buttons
- Optimized for all screen sizes

### 7. Conditional Navigation
- Payment pages show logo-only header (no navigation)
- Other pages show full navigation
- Reduces distractions during checkout

---

## Important Technical Notes

### Next.js 16 Turbopack Webhook Issue

**Problem**: Next.js 16 with Turbopack consumes the request body before webhook handlers can read it, causing signature verification to fail.

**Solution Implemented**:
- **Development**: Skip signature verification with console warning
- **Production**: Full signature verification enabled
- **Router**: Using Pages Router instead of App Router for better body control
- **Body Parsing**: Disabled Next.js body parser, using `raw-body` package

**Code**:
```typescript
export const config = {
  api: {
    bodyParser: false,  // CRITICAL: Disable body parsing
  },
};
```

### Why Pages Router for Webhooks?

App Router has limitations with raw body reading that affect webhook signature verification. Pages Router provides:
- Direct access to raw request buffer
- Better control over body parsing
- More reliable webhook handling
- Compatibility with `raw-body` package

### Webhook Endpoints Conflict Resolution

**Important**: Only one webhook route should exist:
- ✅ `src/pages/api/stripe/webhook.ts` (Active)
- ❌ `src/app/api/stripe/webhook/route.ts` (Deleted to prevent conflict)

---

## Deployment

### Vercel Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Payment system implementation"
   git push origin main
   ```

2. **Configure Vercel**:
   - Import GitHub repository
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`

3. **Environment Variables** (add in Vercel dashboard):
   ```
   STRIPE_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   GHL_INBOUND_WEBHOOK_URL=https://...
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   PAYMENT_AMOUNT_CENTS=10300
   ```

4. **Configure Stripe Webhook**:
   - Go to Stripe Dashboard → Webhooks
   - Add endpoint: `https://yourdomain.com/api/stripe/webhook`
   - Select event: `checkout.session.completed`
   - Copy webhook signing secret and update Vercel env var

5. **Deploy**: Vercel will auto-deploy on push to main

---

## Troubleshooting

### Issue: Webhook signature verification fails

**Symptoms**: 400 errors in webhook handler, signature mismatch

**Solutions**:
- Verify `STRIPE_WEBHOOK_SECRET` matches Stripe Dashboard
- Check that body parsing is disabled (`bodyParser: false`)
- In development, ensure using Stripe CLI webhook secret
- Restart dev server after updating `.env.local`

### Issue: Payment amount shows $100 instead of $103

**Symptoms**: Stripe checkout shows wrong amount

**Solutions**:
- Check `PAYMENT_AMOUNT_CENTS=10300` in `.env.local`
- Restart dev server to load new env vars
- If using `STRIPE_PRICE_ID`, ensure it's set to $103 in Stripe Dashboard

### Issue: Customer name not showing on invoice

**Symptoms**: Product description doesn't include patient name

**Solutions**:
- Verify URL includes `customer_first_name` and `last_name` parameters
- Check `create-checkout-session` API receives both name parameters
- Ensure metadata is being stored correctly
- Restart dev server if recently updated code

### Issue: GHL webhook not receiving data

**Symptoms**: Payments succeed but GHL not updated

**Solutions**:
- Verify `GHL_INBOUND_WEBHOOK_URL` is correct
- Check webhook handler logs for fetch errors
- Test GHL webhook URL with curl/Postman
- Ensure GHL webhook is active and configured

### Issue: Duplicate webhook processing

**Symptoms**: GHL receives multiple payment confirmations

**Solutions**:
- Verify idempotency logic is working (`hasProcessed()`)
- Check webhook handler returns 200 for duplicate events
- Consider implementing Redis/database-based idempotency for production

---

## Future Enhancements

### Potential Improvements

1. **Database Integration**
   - Store payment records locally
   - Persistent idempotency tracking
   - Payment history and reporting

2. **Email Notifications**
   - Send payment receipt via email
   - Admin notification on payment completion
   - Failed payment alerts

3. **Refund Handling**
   - Webhook handler for `charge.refunded` events
   - Update GHL on refunds
   - Refund reason tracking

4. **Payment Analytics**
   - Track conversion rates
   - Monitor payment failures
   - Revenue reporting dashboard

5. **Multiple Payment Options**
   - Add payment plans
   - Support for different voucher amounts
   - Discount code support

6. **Enhanced Security**
   - Rate limiting on payment endpoints
   - CAPTCHA on payment page
   - Fraud detection integration

---

## Support

### Contact Information

**Clinic**: Glory Regenerative  
**Phone**: +1 (813) 970-7371  
**Hours**: Monday - Friday, 9 AM - 5 PM EST

### Developer Resources

- **Stripe Documentation**: https://stripe.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **GoHighLevel API**: https://highlevel.stoplight.io/

---

## Changelog

### Version 1.0 (January 2026)

**Features**:
- ✅ Stripe Checkout integration
- ✅ GHL CRM integration via webhooks
- ✅ Personalized payment landing pages
- ✅ Customer metadata tracking (contact_id, email, first name, last name)
- ✅ Patient name in invoice description
- ✅ 3% processing fee with transparent pricing
- ✅ Payment success/cancelled pages
- ✅ Conditional navigation hiding
- ✅ Mobile responsive design
- ✅ Webhook signature verification (production)
- ✅ Development webhook bypass
- ✅ Idempotency protection

**Technical**:
- Next.js 16.0.10 with Turbopack
- Stripe API version: 2025-12-15.clover
- TypeScript throughout
- Tailwind CSS for styling

---

## License

Proprietary - Glory Regenerative Medical Clinic © 2026
