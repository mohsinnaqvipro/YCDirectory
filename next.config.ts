import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
    dangerouslyAllowSVG: true
  },
  experimental: {
    ppr: 'incremental'
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right'
  }
};

export default nextConfig;
