/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['three'],
  // NOTE: no `env:` block here on purpose. The API routes read
  // process.env at runtime on the server; inlining SUPABASE_* (including
  // the service-role key) into the client bundle was a security defect.
  async redirects() {
    return [
      // The developer pillar moved from /platform to /developers.
      { source: '/platform', destination: '/developers', permanent: true },
    ];
  },
};

module.exports = nextConfig;
