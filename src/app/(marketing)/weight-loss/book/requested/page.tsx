import { Suspense } from 'react';
import { Metadata } from 'next';
import { BookingRequested } from '@/components/ui/BookingRequested';

export const metadata: Metadata = {
  title: 'Appointment Requested | Glory Regenerative',
  description: 'Your medical weight loss consultation request has been received.',
  robots: { index: false, follow: false },
};

/** Where a weight-loss booking lands: its own URL, counted as a conversion (2026-09-24). */
export default function WeightLossBookRequestedPage() {
  return (
    <Suspense>
      <BookingRequested offer="Medical Weight Loss Program" />
    </Suspense>
  );
}
