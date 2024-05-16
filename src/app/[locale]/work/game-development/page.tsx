'use client';

import { useTranslations } from 'next-intl';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import { CastleKnight } from './components/castle-knight';
import { DocumentsMaster } from './components/documents-master';
import { Dawn } from './components/dawn';
import { DemonHunter } from './components/demon-hunter';

export default function GameDevelopmentPage() {
  const t = useTranslations();
  const { theme } = useTheme();

  useEffect(() => {
    HelperInit.InitPage({
      menuUIIsShow: { isShowHeader: true, isShowFooter: true },
      loadTimeout: 1500,
    });
  }, []);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <main className="fade-in flex min-h-[90vh] flex-col items-center justify-start scroll-smooth bg-gray-50 px-10 py-4 text-gray-900 dark:bg-gray-800 dark:text-gray-100 lg:px-24 lg:py-10">
      <CastleKnight theme={theme} />
      <DemonHunter theme={theme} />
      <DocumentsMaster theme={theme} />
      <Dawn theme={theme} />
    </main>
  );
}
