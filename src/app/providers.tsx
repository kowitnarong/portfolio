'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useMobile } from '../utils/mobile/mobile';
import { MiddlewareInit } from '@/core/i18n/i18n';
import { i18nList } from '@/globals/i18n';

export function Providers({ children }: { children: React.ReactNode }) {
  useMobile();
  MiddlewareInit({ i18nList: i18nList });

  let storageUser;
  if (typeof window !== 'undefined') {
    storageUser = JSON.parse(localStorage.getItem('storage-user') || '{}');
  }
  const langData = storageUser?.state?.langData;

  if (langData) {
    document.querySelector('html')?.setAttribute('lang', langData.lang);
  }

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
