import type { NextConfig } from 'next'
import { redirects as seoRedirects } from './src/lib/seo/redirects'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
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
