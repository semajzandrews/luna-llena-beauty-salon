import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Lenis smooth scroll behaves with strict mode off
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
