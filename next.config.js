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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'bookfinder.krispaulbabu.com',
          },
        ],
        destination: '/bookfinder/:path*',
      },
    ];
  },
  
}

module.exports = nextConfig
