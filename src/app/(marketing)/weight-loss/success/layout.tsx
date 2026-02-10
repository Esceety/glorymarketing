import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success — Weight Loss Consultation Requested | Glory Regenerative',
  description:
    'Your weight loss consultation has been requested at Glory Regenerative Center.',
};

// Force dynamic rendering to support useSearchParams in page
export const dynamic = 'force-dynamic';

export default function WeightLossSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
