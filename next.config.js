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
      "www.inquirer.net",
      "bandera.inquirer.net",
      "cebudailynews.inquirer.net",
      "www.sunstar.com.ph",
      "crisis24.garda.com",
      "files01.pna.gov.ph",
      "www.rappler.com",
      "www.manilatimes.net",
      "www.airlineratings.com",
      "visayandailystar.com",
      "static.zawya.com",
      "sa.kapamilya.com",
      "airlive.net",
      "now.humboldt.edu",
      "manilastandard.net",
      "pageone.ph",
      "powerphilippines.com",
      "www.traveldailynews.asia",
    ],
  },
};

module.exports = nextConfig;
