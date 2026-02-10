import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success — Stem Cell Consultation Booked | Glory Regenerative',
  description:
    'Your stem cell therapy consultation has been booked at Glory Regenerative Center.',
};

// Force dynamic rendering to support useSearchParams in page
export const dynamic = 'force-dynamic';

export default function StemCellSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
