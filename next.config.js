/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "storage.googleapis.com",
      "images.gmanews.tv",
      "media.cnn.com",
      "www.militarytimes.com",
      "sports.inquirer.net",
      "business.inquirer.net",
      "entertainment.inquirer.net",
      "lifestyle.inquirer.net",
      "opinion.inquirer.net",
      "technology.inquirer.net",
      "globalnation.inquirer.net",
      "newsinfo.inquirer.net",
      "mb.com.ph",
      "pbs.twimg.com",
    ],
  },
};

module.exports = nextConfig;
