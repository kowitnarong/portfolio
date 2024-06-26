import type { Metadata } from 'next';
import React from 'react';
import '@/globals/globals.css';
import '@/globals/tailwind.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import type { Viewport } from 'next';
import NavbarContainer from '../components/layout/navbar-container';
import FooterContainer from '../components/layout/footer-container';
import { Providers } from './providers';
import UILoader from '../components/loader/ui-loader';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: {
    default: 'Portfolio | Kowit Narongtuwapan | Developer',
    template: '%s | Kowit Narongtuwapan | Developer',
  },
  description:
    'Welcome to Kowit Narongtuwapan portfolio! This web application showcases my projects, skills, and achievements as a developer.',
  generator: 'Next.js',
  manifest: '/manifest.webmanifest',
  keywords: [
    'portfolio',
    'nextjs portfolio',
    'portfolio kowit narongtuwapan',
    'kowit',
    'kowit narongtuwapan',
    'nextjs',
    'nextjs14',
    'next14',
    'pwa',
    'next-pwa',
  ],
  applicationName: 'Portfolio | Kowit Narongtuwapan',
  referrer: 'no-referrer',
  creator: 'Kowit Narongtuwapan',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ''),
  openGraph: {
    type: 'website',
    siteName: 'Portfolio | Kowit Narongtuwapan',
    url: process.env.NEXT_PUBLIC_SITE_URL || '',
    title: 'Portfolio | Kowit Narongtuwapan | Developer',
    description:
      'Welcome to Kowit Narongtuwapan portfolio! This web application showcases my projects, skills, and achievements as a developer.',
    images: [
      {
        url: '/screenshots/wide-screenshot.png',
        width: 1280,
        height: 720,
        alt: 'Portfolio | Kowit Narongtuwapan',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'Portfolio | Kowit Narongtuwapan',
    startupImage: [
      {
        url: '/icons/icon-128x128.png',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
    statusBarStyle: 'default',
  },
  authors: [
    { name: 'Kowit Narongtuwapan' },
    {
      name: 'Kowit Narongtuwapan',
      url: 'https://www.linkedin.com/in/kowit-narongtuwapan-4a6b2825a/',
    },
  ],
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/icons/icon-128x128.png',
    },
    { rel: 'icon', url: '/icons/icon-128x128.png' },
  ],
  alternates: {
    canonical: './',
    languages: {
      en: '/en',
      th: '/th',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'th';
  };
};

const localFontSRB = localFont({
  src: '../messages/fonts/Sarabun-Regular.ttf',
  variable: '--font-srb',
  display: 'swap',
  weight: '400',
  style: 'normal',
});

const RootLayout = ({ children, params: { locale } }: Props) => {
  return (
    <html lang={locale}>
      <body className={`${localFontSRB.variable} font-sans`}>
        <UILoader>
          <NextIntlClientProvider messages={useMessages()} locale={locale}>
            <Providers>
              <NavbarContainer />
              {children}
              <FooterContainer />
            </Providers>
          </NextIntlClientProvider>
        </UILoader>
      </body>
    </html>
  );
};

export default RootLayout;
