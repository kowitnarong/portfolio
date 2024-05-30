'use client';

import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Muteru } from './components/muteru';
import { NetZero } from './components/net-zero';
import { Portfolio } from './components/portfolio';
import { useTranslation } from 'react-i18next';
import { I18nDomainName } from './i18n/i18n';

export default function WebDevelopmentPage() {
  const { t } = useTranslation([I18nDomainName]);
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
    <main className="fade-in flex min-h-[90vh] flex-col items-center justify-start bg-gray-50 px-10 py-4 text-gray-900 dark:bg-gray-800 dark:text-gray-100 lg:px-24 lg:py-10">
      <Muteru i18nDomainName={I18nDomainName} theme={theme} />
      <NetZero i18nDomainName={I18nDomainName} theme={theme} />
      <Portfolio i18nDomainName={I18nDomainName} theme={theme} />
    </main>
  );
}
