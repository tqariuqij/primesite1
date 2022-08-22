/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.vercel.com", "s3.amazonaws.com", "undefined"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
