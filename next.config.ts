import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    viewTransition: true
  },
  reactCompiler: true
};

export default nextConfig;
