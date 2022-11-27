/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.pixabay.com",
      "images.pexel.com",
      "plus.unsplash.com",
      "unsplash.com",
    ],
  },
};

module.exports = nextConfig;
