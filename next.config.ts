import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/radiology-ai-dashboard', // Replace with your repository name
  assetPrefix: '/radiology-ai-dashboard/', // Replace with your repository name
};

export default nextConfig;
