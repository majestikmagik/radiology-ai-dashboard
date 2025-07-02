
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/radiology-ai-dashboard' : '', // Apply basePath only in production
  assetPrefix: isProd ? '/radiology-ai-dashboard/' : '', // Apply assetPrefix only in production
};

export default nextConfig;
