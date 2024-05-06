'use client';

import { useTranslations } from 'next-intl';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect, useState } from 'react';

export default function GameDevelopmentPage() {
  const t = useTranslations();

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
    <main className="flex flex-col min-h-[90vh] bg-gray-50 py-4 px-10 text-gray-900 items-center justify-start lg:py-10 lg:px-24 dark:bg-gray-800 dark:text-gray-100"></main>
  );
}
