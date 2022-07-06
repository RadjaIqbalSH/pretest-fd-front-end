/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgcdn.femaledaily.com", "static.femaledaily.com"],
  },
};

module.exports = nextConfig;
