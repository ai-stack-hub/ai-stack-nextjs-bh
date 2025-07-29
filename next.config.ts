import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ai-stack-nextjs-bh' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-stack-nextjs-bh/' : '',
};

export default nextConfig;
