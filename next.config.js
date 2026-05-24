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
  // The simplified product architecture folds the old Sales, Build, and
  // Handover module pages into the Developer Dashboard. Permanently redirect
  // their routes so existing links and search results land in the right place.
  async redirects() {
    return [
      { source: "/sales", destination: "/developer-dashboard", permanent: true },
      { source: "/build", destination: "/developer-dashboard", permanent: true },
      { source: "/handover", destination: "/developer-dashboard", permanent: true },
    ];
  },
};

module.exports = nextConfig;
