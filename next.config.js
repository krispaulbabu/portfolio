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
        source: '/bookfinder',
        destination: 'https://krispaulbabu.com/bookfinder',
      },
    ]
  }
}

module.exports = nextConfig
