import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Received | Glory Wellness & Regenerative Centre – Nigeria',
  description:
    'Your consultation request has been received. We will contact you shortly.',
  robots: { index: false, follow: false },
};

// Force dynamic rendering to support useSearchParams
export const dynamic = 'force-dynamic';

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
