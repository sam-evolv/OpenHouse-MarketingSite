/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['three'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
