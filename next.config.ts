import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['jose', 'bcryptjs', '@neondatabase/serverless'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This is a wildcard that allows ALL https domains
      },
    ],
  },
};

export default nextConfig;
