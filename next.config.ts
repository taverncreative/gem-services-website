import type { NextConfig } from 'next'
import { redirects as seoRedirects } from './src/lib/seo/redirects'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async redirects() {
    return [
      ...Object.entries(seoRedirects).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      {
        source: '/guides/:category',
        destination: '/guides',
        permanent: true,
      },
      // Catch-all for any remaining old /rat/* and /mice/* keyword pages
      {
        source: '/rat/:path*',
        destination: '/services/rat-control',
        permanent: true,
      },
      {
        source: '/mice/:path*',
        destination: '/services/mouse-control',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
