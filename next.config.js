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
        source: 'https://bookfinder.krispaulbabu.com',
        destination: '/bookfinder',
      },
    ]
  },
  
}

module.exports = nextConfig
