// Force dynamic rendering to support useSearchParams
export const dynamic = 'force-dynamic';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
