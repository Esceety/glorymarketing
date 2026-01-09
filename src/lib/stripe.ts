/**
 * Stripe Client Singleton
 * Server-side only - never expose to browser
 */

import Stripe from 'stripe';
import { paymentConfig } from '@/config/payment';

let stripeInstance: Stripe | null = null;

export function getStripeClient(): Stripe {
  if (!stripeInstance) {
    if (!paymentConfig.stripeSecretKey) {
      throw new Error(
        'STRIPE_SECRET_KEY is not configured. Please set it in your environment variables.'
      );
    }

    stripeInstance = new Stripe(paymentConfig.stripeSecretKey, {
      apiVersion: '2025-12-15.clover',
      typescript: true,
    });
  }

  return stripeInstance;
}
