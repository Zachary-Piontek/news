/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['storage.googleapis.com', 'images.gmanews.tv', 'media.cnn.com', 'www.militarytimes.com'],
  },
};

module.exports = nextConfig;
