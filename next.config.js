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
    return {
        beforeFiles: [
            // if the host is `app.acme.com`,
            // this rewrite will be applied
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'bookfinder.krispaulbabu.com',
                    },
                ],
                destination: '/app/:path*',
            },
        ]
    }
}
}

module.exports = nextConfig
