import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['jose', 'bcryptjs', '@neondatabase/serverless'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ALL https domains allowed (used for our image uploads)
      },
    ],
  },
};

export default nextConfig;
