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
        source: "/bookfinder",
        destination: "https://bookfinder.krispaulbabu.com",
      },
    ];
  },
}

module.exports = nextConfig
