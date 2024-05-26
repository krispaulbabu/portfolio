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
  rewrites() {
    return [
      {
        source: 'bookfinder.krispaulbabu.com',
        destination: '/bookfinder',
      },
    ]
  }
}

module.exports = nextConfig
