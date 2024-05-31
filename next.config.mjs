import withNextIntl from 'next-intl/plugin';
import withPWA from 'next-pwa';

const nextIntlConfig = withNextIntl();

const PWA = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  maximumFileSizeToCacheInBytes: 5000000,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: process.env.NEXT_PUBLIC_SITE_URL,
          },
        ],
        permanent: true,
        destination: process.env.NEXT_PUBLIC_SITE_URL + '/:path*',
      },
    ];
  },
  reactStrictMode: process.env.NODE_ENV !== 'development',
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    unoptimized: false,
  },
  swcMinify: true,
};

export default nextIntlConfig(PWA(nextConfig));
