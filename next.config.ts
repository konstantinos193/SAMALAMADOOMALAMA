import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "deape.fi", // Only apply redirect for the non-HTTPS version
          },
        ],
        destination: "https://deape.fi/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
