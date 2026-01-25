import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success — Stem Cell Consultation Booked | Glory Regenerative',
  description: 'Your stem cell therapy consultation has been booked at Glory Regenerative Center.',
};

export default function StemCellSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
