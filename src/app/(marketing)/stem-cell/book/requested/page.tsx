import { Suspense } from 'react';
import { Metadata } from 'next';
import { BookingRequested } from '@/components/ui/BookingRequested';

export const metadata: Metadata = {
  title: 'Appointment Requested | Glory Regenerative',
  description: 'Your Stem Cell Consultation appointment request has been received.',
  robots: { index: false, follow: false },
};

/** Where a stem-cell voucher booking lands: its own URL, counted as a conversion (2026-09-24). */
export default function StemCellBookRequestedPage() {
  return (
    <Suspense>
      <BookingRequested offer="Stem Cell Therapy Consultation" />
    </Suspense>
  );
}
