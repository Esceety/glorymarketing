import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glory Regenerative - Ad Preview',
  description: 'Preview social media ads before deployment',
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
