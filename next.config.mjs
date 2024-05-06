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
  reactStrictMode: process.env.NODE_ENV !== 'development',
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
};

export default PWA(nextIntlConfig(nextConfig));
