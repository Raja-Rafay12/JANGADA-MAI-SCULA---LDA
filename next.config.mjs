/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/maintenance-plans',
        destination: '/maintenance',
      },
      {
        source: '/:locale(en|pt|ar)/:path*',
        destination: '/:path*?lang=:locale',
      },
      {
        source: '/:locale(en|pt|ar)',
        destination: '/?lang=:locale',
      },
    ];
  },
};

export default nextConfig;
