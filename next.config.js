/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImages: true
    }
  },
  
  swcMinify: true,
  images: {
    domains: [
      'files.stripe.com',
    ]
  }
}

module.exports = nextConfig
