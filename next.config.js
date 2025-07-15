/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom', // Use a custom loader
    domains: [], // Leave domains empty
  },
};

module.exports = nextConfig;

