import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Request Consultation | Glory Wellness & Regenerative Centre – Nigeria',
  description:
    'Request a private consultation for regenerative medicine in Abuja or Lagos.',
  robots: { index: false, follow: false },
};

// Force dynamic rendering to support useSearchParams
export const dynamic = 'force-dynamic';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
