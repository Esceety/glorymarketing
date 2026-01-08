/**
 * Payment Configuration
 * Loads and validates payment-related environment variables
 */

// Validate required environment variables
const requiredEnvVars = {
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  GHL_INBOUND_WEBHOOK_URL: process.env.GHL_INBOUND_WEBHOOK_URL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
};

// Check for missing required vars (server-side only)
if (typeof window === 'undefined') {
  const missing = Object.entries(requiredEnvVars)
    .filter(([key, value]) => !value && !key.startsWith('NEXT_PUBLIC_'))
    .map(([key]) => key);

  if (missing.length > 0) {
    console.warn(
      `⚠️  Missing environment variables: ${missing.join(', ')}\nSome features may not work correctly.`
    );
  }
}

export const paymentConfig = {
  // Stripe keys
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
  stripePublishableKey:
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_...',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
  stripePriceId: process.env.STRIPE_PRICE_ID || '', // Optional

  // GHL webhook
  ghlInboundWebhookUrl:
    process.env.GHL_INBOUND_WEBHOOK_URL ||
    'https://services.leadconnectorhq.com/hooks/...',

  // Site URL
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',

  // Payment details
  campaignId: process.env.PAYMENT_CAMPAIGN_ID || 'glory_regen_voucher_2026',
  campaignName:
    process.env.PAYMENT_CAMPAIGN_NAME || 'Glory Regenerative Voucher',
  voucherType: process.env.PAYMENT_VOUCHER_TYPE || 'new_patient_consult',
  amountCents: parseInt(process.env.PAYMENT_AMOUNT_CENTS || '10000', 10), // $100.00
  currency: (process.env.PAYMENT_CURRENCY || 'usd').toLowerCase(),

  // Determine environment based on secret key
  get environment(): 'sandbox' | 'live' {
    return this.stripeSecretKey.includes('_test_') ? 'sandbox' : 'live';
  },
} as const;

export type PaymentConfig = typeof paymentConfig;
