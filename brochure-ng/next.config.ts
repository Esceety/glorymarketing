import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
