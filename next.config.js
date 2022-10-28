/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      },
      {
        protocol: 'https',
        hostname: 'regenbogenfisch.com'
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com'
      },
    ]
  },
  compiler: {
    styledComponents: true,
  },
  }


module.exports = nextConfig
