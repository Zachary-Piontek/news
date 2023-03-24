/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['randomfox.ca', 'a57.foxnews.com'],
  }
}

module.exports = nextConfig
