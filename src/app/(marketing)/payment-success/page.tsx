/**
 * Payment Success Page
 * Displayed after successful Stripe checkout completion
 */

import { Metadata } from 'next';
import { PaymentSuccessClient } from './PaymentSuccessClient';

export const metadata: Metadata = {
  title: 'Payment Successful | Glory Regenerative',
  description: 'Your voucher payment has been received successfully.',
};

export default function PaymentSuccessPage() {
  return <PaymentSuccessClient />;
}
