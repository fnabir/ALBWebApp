import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.mdel.co.kr',
      },
      {
        protocol: 'http',
        hostname: 'en.mdunks.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sicoritaly.com',
      },
      {
        protocol: 'http',
        hostname: 'www.shineelevator.com',
      },
      {
        protocol: 'http',
        hostname: 'www.torindrive-europe.com',
      },
      {
        protocol: 'https',
        hostname: 'shopsource.singoo.cc',
      },
    ],
  },
};

export default nextConfig;
