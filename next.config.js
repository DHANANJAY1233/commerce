/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  experimental: {
    serverActions: true
  },
  images: {
    //TODO: FIX THIS HACK, this just allows mock images
    domains: [
      'cdn.shopify.com',
      'demo.vercel.store',
      'upload.wikimedia.org',
      'images.unsplash.com',
      'plus.unsplash.com',
      'firebasestorage.googleapis.com'
    ],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true
      }
    ];
  }
};
