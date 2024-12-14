import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Ensure SWC minification is enabled for better performance
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
    optimizeCss: true, // Ensure CSS optimization for Tailwind
    legacyBrowsers: false, // Disable support for very old browsers
  },
};

export default nextConfig;
