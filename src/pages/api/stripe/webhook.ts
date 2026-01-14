import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { paymentConfig } from '@/config/payment';
import { hasProcessed, markProcessed } from '@/lib/idempotency';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
});

// Helper to read raw body from request - more reliable method
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

// CRITICAL: Disable body parsing and use Node.js runtime
export const config = {
  api: {
    bodyParser: false,
  },
  runtime: 'nodejs',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('🚀 Webhook request received');

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const signature = req.headers['stripe-signature'];

    if (!signature) {
      console.error('❌ Missing stripe-signature header');
      return res.status(400).json({ error: 'Missing signature' });
    }

    let event: Stripe.Event;

    try {
      // Read the raw body directly from the request
      const rawBody = await getRawBody(req);

      // Get and clean the webhook secret (remove any whitespace/newlines)
      const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

      console.log(
        `🔑 Webhook secret present: ${!!webhookSecret}, length: ${webhookSecret?.length}`
      );
      console.log(
        `🌍 Environment: ${process.env.NODE_ENV}, Vercel Env: ${process.env.VERCEL_ENV}`
      );
      console.log(
        `📦 Raw body type: ${typeof rawBody}, length: ${rawBody?.length}, is Buffer: ${Buffer.isBuffer(rawBody)}`
      );

      // Verify the webhook signature
      if (!webhookSecret) {
        console.error('❌ STRIPE_WEBHOOK_SECRET not configured');
        return res.status(500).json({ error: 'Webhook secret not configured' });
      }

      const sigStr = Array.isArray(signature) ? signature[0] : signature;
      console.log(`🔐 Verifying signature with ${rawBody.length} byte body`);

      // Construct and verify the event
      event = stripe.webhooks.constructEvent(rawBody, sigStr, webhookSecret);
      console.log(`✅ Stripe webhook verified: ${event.type}`);
    } catch (err) {
      console.error('❌ Webhook signature verification failed:', err);
      console.error('❌ Error details:', {
        message: err instanceof Error ? err.message : 'Unknown error',
        name: err instanceof Error ? err.name : 'Unknown',
        type:
          err instanceof Error && 'type' in err ? (err as any).type : undefined,
      });

      // Return 400 for signature verification failures so Stripe knows the webhook is configured incorrectly
      return res.status(400).json({
        error: 'Webhook signature verification failed',
        message: err instanceof Error ? err.message : 'Invalid signature',
      });
    }

    // Check idempotency - prevent double-processing
    if (hasProcessed(event.id)) {
      console.log(`✅ Event ${event.id} already processed, skipping`);
      return res.status(200).json({ received: true });
    }

    // Only act on what we care about
    if (
      event.type === 'checkout.session.completed' ||
      event.type === 'payment_intent.succeeded'
    ) {
      try {
        const data = event.data.object as any;

        console.log(`📬 Processing payment event:`, {
          type: event.type,
          id: data.id,
          metadata: data.metadata,
        });

        // Send to GHL webhook
        if (event.type === 'checkout.session.completed') {
          const session = data as Stripe.Checkout.Session;

          // Extract metadata
          const contactId = session.metadata?.ghl_contact_id;
          const customerEmail = session.metadata?.customer_email; // Original GHL contact email
          const customerFirstName = session.metadata?.customer_first_name; // Original GHL contact first name
          const customerLastName = session.metadata?.customer_last_name; // Original GHL contact last name
          const campaignId = session.metadata?.campaign_id;
          const campaignName = session.metadata?.campaign_name;
          const voucherType = session.metadata?.voucher_type;
          const environment = session.metadata?.environment;

          // Get payment details
          const amountTotal = session.amount_total || 0;
          const currency = session.currency || 'usd';
          const paymentIntentId = session.payment_intent as string;
          const payerEmail = session.customer_details?.email || '';
          const payerName = session.customer_details?.name || '';

          console.log(`💳 Payment completed for contact: ${contactId}`);

          // Prepare GHL webhook payload
          const ghlPayload = {
            contact_id: contactId || '',
            contact_email: customerEmail || '', // Original GHL contact email
            contact_first_name: customerFirstName || '', // Original GHL contact first name
            contact_last_name: customerLastName || '', // Original GHL contact last name
            payment_status: 'paid',
            payment_amount: amountTotal / 100, // Convert cents to dollars
            payment_amount_cents: amountTotal,
            payment_currency: currency.toUpperCase(),
            payment_provider: 'stripe',
            campaign_id: campaignId || '',
            campaign_name: campaignName || '',
            voucher_type: voucherType || '',
            stripe_event_id: event.id,
            stripe_session_id: session.id,
            stripe_payment_intent_id: paymentIntentId || '',
            payer_email: payerEmail, // Email entered during Stripe checkout
            payer_name: payerName,
            paid_at: new Date().toISOString(),
            environment: environment || paymentConfig.environment,
          };

          // Post to GHL inbound webhook
          const ghlResponse = await fetch(paymentConfig.ghlInboundWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(ghlPayload),
          });

          if (!ghlResponse.ok) {
            console.error(
              `❌ GHL webhook failed: ${ghlResponse.status} ${ghlResponse.statusText}`
            );
            const errorText = await ghlResponse.text();
            console.error(`Response body: ${errorText}`);
          } else {
            console.log(
              `✅ Successfully posted to GHL webhook for ${contactId}`
            );
          }
        }
      } catch (err) {
        console.error('❌ Error handling Stripe event:', err);
        // IMPORTANT: still return 200 so Stripe doesn't retry forever
      }
    }

    // Mark event as processed
    markProcessed(event.id, event.type);

    // ✅ Always return 200 for ALL Stripe events
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('❌ FATAL: Unhandled error in webhook handler:', error);
    console.error(
      '❌ Error stack:',
      error instanceof Error ? error.stack : 'No stack trace'
    );
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
