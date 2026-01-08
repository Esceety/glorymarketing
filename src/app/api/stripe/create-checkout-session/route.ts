/**
 * POST /api/stripe/create-checkout-session
 * Creates a Stripe Checkout session for voucher payment
 */

import { NextRequest, NextResponse } from 'next/server';
import { getStripeClient } from '@/lib/stripe';
import { paymentConfig } from '@/config/payment';

interface CreateCheckoutRequestBody {
  contact_id: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body: CreateCheckoutRequestBody = await request.json();
    const { contact_id } = body;

    if (!contact_id || typeof contact_id !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid contact_id' },
        { status: 400 }
      );
    }

    // Get Stripe client
    const stripe = getStripeClient();

    // Build metadata to bind to CRM
    const metadata = {
      ghl_contact_id: contact_id,
      campaign_id: paymentConfig.campaignId,
      campaign_name: paymentConfig.campaignName,
      voucher_type: paymentConfig.voucherType,
      payment_page: 'voucher-payment',
      environment: paymentConfig.environment,
    };

    // Determine line items
    const lineItems: Array<{
      price?: string;
      price_data?: {
        currency: string;
        product_data: {
          name: string;
          description?: string;
        };
        unit_amount: number;
      };
      quantity: number;
    }> = [];

    if (paymentConfig.stripePriceId) {
      // Use configured price ID
      lineItems.push({
        price: paymentConfig.stripePriceId,
        quantity: 1,
      });
    } else {
      // Fallback to inline price_data
      lineItems.push({
        price_data: {
          currency: paymentConfig.currency,
          product_data: {
            name: 'Glory Regenerative – Voucher Payment',
            description:
              'Knee & Hip Pain Relief Assessment - Full consultation, evaluation, and personalized treatment plan',
          },
          unit_amount: paymentConfig.amountCents,
        },
        quantity: 1,
      });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${paymentConfig.siteUrl}/payment-success?contact_id=${contact_id}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${paymentConfig.siteUrl}/payment-cancelled?contact_id=${contact_id}`,
      customer_creation: 'always',
      metadata,
      payment_intent_data: {
        metadata,
      },
    });

    // Return checkout URL
    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error creating checkout session:', error);

    // Handle Stripe-specific errors
    if (error && typeof error === 'object' && 'type' in error) {
      return NextResponse.json(
        { error: 'Stripe error occurred', details: String(error) },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
