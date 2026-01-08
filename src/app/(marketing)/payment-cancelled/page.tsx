/**
 * Payment Cancelled Page
 * Displayed when user cancels Stripe checkout
 */

import { Metadata } from 'next';
import { PaymentCancelledClient } from './PaymentCancelledClient';

export const metadata: Metadata = {
  title: 'Payment Cancelled | Glory Regenerative',
  description: 'Your payment was cancelled.',
};

export default function PaymentCancelledPage() {
  return <PaymentCancelledClient />;
}
