import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success — Weight Loss Consultation Requested | Glory Regenerative',
  description:
    'Your weight loss consultation has been requested at Glory Regenerative Center.',
};

export default function WeightLossSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
