/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['three'],
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },
  async redirects() {
    return [
      // The developer pillar moved from /platform to /developers.
      { source: '/platform', destination: '/developers', permanent: true },
      { source: '/sales', destination: '/developers', permanent: true },
      { source: '/build', destination: '/developers', permanent: true },
      { source: '/handover', destination: '/developers', permanent: true },
      { source: '/intelligence', destination: '/developers', permanent: true },
      { source: '/agent', destination: '/assistant', permanent: true },
      { source: '/features', destination: '/', permanent: true },
      { source: '/solutions', destination: '/', permanent: true },
      { source: '/how-it-works', destination: '/', permanent: true },
      { source: '/demo', destination: '/contact', permanent: true },
    ];
  },
};

module.exports = nextConfig;
