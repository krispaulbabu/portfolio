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
