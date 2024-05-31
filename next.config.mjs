import withPWA from 'next-pwa';

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
            value: process.env.NEXT_PUBLIC_WWW_SITE_URL,
          },
        ],
        permanent: true,
        destination: process.env.NEXT_PUBLIC_WWW_SITE_URL + '/:path*',
      },
    ];
  },
  reactStrictMode: process.env.NODE_ENV === 'production',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,

  output: 'export',
  distDir: 'hosting/public',
  images: {
    unoptimized: true,
  },
};

export default PWA(nextConfig);
