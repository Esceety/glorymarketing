import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glory Wellness & Regenerative Centre - Nigeria',
  description:
    'Advanced PRP and Adult Stem Cell Therapy in Abuja and Lagos, Nigeria. Platelet Rich Plasma for healing, recovery, anti-aging, and regenerative medicine.',
  keywords:
    'PRP therapy Nigeria, stem cell therapy Nigeria, regenerative medicine Abuja, regenerative medicine Lagos, platelet rich plasma, adult stem cells, Glory Wellness Nigeria',
  icons: {
    icon: '/favicon.svg',
  },
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
