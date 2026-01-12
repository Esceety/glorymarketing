/**
 * Voucher Payment Page
 * Displays marketing-friendly payment page with Stripe Checkout integration
 */

import { Metadata } from 'next';
import { VoucherPaymentClient } from './VoucherPaymentClient';

export const metadata: Metadata = {
  title: 'Complete Your Voucher Payment | Glory Regenerative',
  description:
    'Secure your $100 voucher for pain relief consultation covering knee, hip, neck, lower back, and joint pain at Glory Regenerative Center.',
};

export default function VoucherPaymentPage() {
  return <VoucherPaymentClient />;
}
