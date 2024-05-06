'use client';

import { useTranslations } from 'next-intl';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect, useState } from 'react';

export default function WebDevelopmentPage() {
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
    <main className="flex min-h-[90vh] flex-col items-center justify-start bg-gray-50 px-10 py-4 text-gray-900 dark:bg-gray-800 dark:text-gray-100 lg:px-24 lg:py-10"></main>
  );
}
