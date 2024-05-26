/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    // Check if the environment variable for the subdomain is set
    if (process.env.SUBDOMAIN === 'BOOKFINDER') {
      return [
        { source: '/', destination: '/bookfinder' },
      ];
    }

    // Default rewrites for the main domain
    return [];
  },
}

module.exports = nextConfig
