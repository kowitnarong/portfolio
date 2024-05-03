'use client';

import { useTranslations } from 'next-intl';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect } from 'react';

export default function WorkPage() {
  const t = useTranslations();

  HelperInit.InitPage({
    menuUIIsShow: { isShowHeader: true, isShowFooter: true },
    loadTimeout: 1500,
  });

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 py-4 px-10 text-gray-900 items-center justify-start lg:py-10 lg:px-24 dark:bg-gray-800 dark:text-gray-100"></main>
  );
}
