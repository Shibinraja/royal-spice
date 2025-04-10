import type { NextConfig } from "next";

const NextConfig = {
  reactStrictMode: true,
  // This line is important for Firebase integration
  output: "export",
  // Only add this if you don't have images that use Next.js Image optimization
  images: { unoptimized: true },
};

module.exports = NextConfig;
