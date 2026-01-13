# Glory Regenerative Marketing Site

This is the marketing funnel for Glory Regenerative, built with Next.js and deployed to Vercel.

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- ESLint + Prettier

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Check formatting
- `npm run format:write` - Fix formatting

## Voucher Payment Flow (Gate 7)

This implementation includes a complete Stripe Checkout payment flow for the $100 voucher:

### Setup Required

1. **Environment Variables**: Copy `.env.local.example` to `.env.local` and fill in:
   - `STRIPE_SECRET_KEY` - From Stripe Dashboard → API Keys
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - From Stripe Dashboard → API Keys
   - `STRIPE_WEBHOOK_SECRET` - From Stripe Dashboard → Webhooks
   - `GHL_INBOUND_WEBHOOK_URL` - Your GoHighLevel webhook endpoint
   - `NEXT_PUBLIC_SITE_URL` - Your site URL (http://localhost:3000 for dev)

2. **Stripe Webhook Setup**: 
   
   **For Production:**
   - Create webhook endpoint in Stripe Dashboard
   - URL: `https://gloryregenerativemed.com/api/stripe/webhook`
   - Events: `checkout.session.completed`, `payment_intent.succeeded`
   - API Version: `2025-12-15.clover`
   - **CRITICAL**: Copy the webhook signing secret exactly as shown (starts with `whsec_`)
   - Add to Vercel env vars using: `printf "whsec_YOUR_SECRET" | vercel env add STRIPE_WEBHOOK_SECRET production`
   - ⚠️ **Never use `echo`** - it adds newline characters that break signature verification
   
   **For Local Testing:**
   ```bash
   # Use Stripe CLI to forward events:
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
   
   **Troubleshooting**: See [STRIPE_WEBHOOK_TROUBLESHOOTING.md](./STRIPE_WEBHOOK_TROUBLESHOOTING.md) for detailed webhook signature debugging.

### Testing Locally

1. **Start the dev server**:

   ```bash
   npm run dev
   ```

2. **Test checkout session creation**:
   Visit: `http://localhost:3000/voucher-payment?contact_id=test_123`

   Click "Pay $100 Now" - should redirect to Stripe Checkout (sandbox).

3. **Test Stripe webhook locally**:

   ```bash
   # In a separate terminal, forward Stripe events:
   stripe listen --forward-to localhost:3000/api/stripe/webhook

   # Trigger a test event:
   stripe trigger checkout.session.completed
   ```

4. **Test success/cancel pages**:
   - Success: `http://localhost:3000/payment-success?contact_id=test_123`
   - Cancel: `http://localhost:3000/payment-cancelled?contact_id=test_123`

### Payment Flow Routes

- `/voucher-payment?contact_id={id}` - Payment page (contact_id required)
- `/payment-success?contact_id={id}&session_id={session_id}` - Success confirmation
- `/payment-cancelled?contact_id={id}` - Cancellation page
- `/api/stripe/create-checkout-session` - Creates Stripe session (POST)
- `/api/stripe/webhook` - Receives Stripe events and posts to GHL

### Notes

- Uses Stripe Checkout Sessions (not custom card forms) for PCI compliance
- Webhook includes idempotency to prevent duplicate GHL posts
- Events are stored in `.next/cache/stripe-events.json` (dev-safe)
- All sensitive keys are server-side only (never exposed to browser)

## Deployment

This project is deployed to Vercel at [gloryregenerativemed.com](https://gloryregenerativemed.com).
