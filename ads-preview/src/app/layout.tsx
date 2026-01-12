import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glory Regenerative - Ad Preview System',
  description: 'Facebook ad preview and A/B testing platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
