/** @type {import('next').NextConfig} */

const nextConfig = {
  // basePath: '/draft',
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/:lang',
        destination: '/:lang/splash',
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'api.chaletshorizonnature.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  },
};

module.exports = nextConfig;
