import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          as: '*.js',
          loaders: ['@svgr/webpack'],
        },
      },
    },
  } /* config options here */,
  images: {
    remotePatterns: [
      { hostname: '**', protocol: 'https' }, // 필요시 특정 도메인만 좁혀도 됨
    ],
  },
};

export default nextConfig;
