import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You — Your Request Has Been Received | Glory Regenerative',
  description: 'Your appointment request has been received by our team.',
};

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
