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
  // permanent: true emits a 308, preserving the request method and giving
  // deep links to retired routes a graceful landing.
  async redirects() {
    return [
      // Agent is not on the public site yet; deep links land on the homepage.
      { source: "/agent", destination: "/", permanent: true },
      // The old Sales/Build/Handover module pages folded into the
      // Developer Dashboard product.
      { source: "/sales", destination: "/developer-dashboard", permanent: true },
      { source: "/build", destination: "/developer-dashboard", permanent: true },
      { source: "/handover", destination: "/developer-dashboard", permanent: true },
    ];
  },
};

module.exports = nextConfig;
