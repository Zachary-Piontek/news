/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['randomfox.ca', 'a57.foxnews.com', 'sa.kapamilya.com', 'images.gmanews.tv', 'business.inquirer.net'],
  }
}

module.exports = nextConfig
