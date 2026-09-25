import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // The old weight-loss "request received" page (no calendar) is retired:
  // the pop-up now goes to the booking calendars (2026-09-24). Older ad and
  // email links land there too, with their query string.
  async redirects() {
    return [{ source: '/weight-loss/success', destination: '/weight-loss/book', permanent: false }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ceety-asset-hub.s3.us-east-1.amazonaws.com',
        pathname: '/ceetyobjects/**',
      },
    ],
  },
};

export default nextConfig;
