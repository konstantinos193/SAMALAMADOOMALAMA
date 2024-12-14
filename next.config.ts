import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Use SWC for fast and optimized builds
  async redirects() {
    return [
      {
        source: "/(.*)",
        destination: "https://deape.fi/:path*", // Redirect all traffic to HTTPS
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizeCss: true, // Optimize Tailwind and global CSS
  },
};

export default nextConfig;
