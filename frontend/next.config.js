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
    ]
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
      }
    ],
  },
}

module.exports = nextConfig
