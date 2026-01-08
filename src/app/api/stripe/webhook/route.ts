/**
 * POST /api/stripe/webhook
 * Handles Stripe webhook events (signature verification required)
 * Listens for checkout.session.completed and posts to GHL webhook
 */

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripeClient } from '@/lib/stripe';
import { paymentConfig } from '@/config/payment';
import { hasProcessed, markProcessed } from '@/lib/idempotency';

export async function POST(request: NextRequest) {
  const stripe = getStripeClient();

  // Get raw body for signature verification
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    console.error('❌ Missing stripe-signature header');
    return NextResponse.json(
      { error: 'Missing signature' },
      { status: 400 }
    );
  }

  // Verify webhook signature
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      paymentConfig.stripeWebhookSecret
    );
  } catch (err: unknown) {
    console.error('❌ Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  // Check idempotency - prevent double-processing
  if (hasProcessed(event.id)) {
    console.log(`✅ Event ${event.id} already processed, skipping`);
    return NextResponse.json({ received: true, skipped: true }, { status: 200 });
  }

  console.log(`📨 Received Stripe event: ${event.type} (${event.id})`);

  // Handle checkout.session.completed
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Extract metadata
    const contactId = session.metadata?.ghl_contact_id;
    const campaignId = session.metadata?.campaign_id;
    const campaignName = session.metadata?.campaign_name;
    const voucherType = session.metadata?.voucher_type;
    const environment = session.metadata?.environment;

    // Get payment details
    const amountTotal = session.amount_total || 0;
    const currency = session.currency || 'usd';
    const paymentIntentId = session.payment_intent as string;
    const customerEmail = session.customer_details?.email || '';
    const customerName = session.customer_details?.name || '';

    console.log(`💳 Payment completed for contact: ${contactId}`);

    // Prepare GHL webhook payload
    const ghlPayload = {
      contact_id: contactId || '',
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
      payer_email: customerEmail,
      payer_name: customerName,
      paid_at: new Date().toISOString(),
      environment: environment || paymentConfig.environment,
    };

    // Post to GHL inbound webhook
    try {
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
        console.log(`✅ Successfully posted to GHL webhook for ${contactId}`);
      }
    } catch (error) {
      console.error('❌ Error posting to GHL webhook:', error);
    }
  }

  // Mark event as processed
  markProcessed(event.id, event.type);

  return NextResponse.json({ received: true }, { status: 200 });
}
