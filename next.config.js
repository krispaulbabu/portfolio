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
    return [
      {
        source: '/bookfinder',
        destination: '/bookfinder', // Keeps the internal path same, but allows for handling
        basePath: false,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/bookfinder',
        destination: 'https://bookfinder.krispaulbabu.com',
        permanent: false,
        basePath: false,
      },
    ];
  },
  
}

module.exports = nextConfig
