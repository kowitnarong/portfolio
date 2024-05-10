'use client';

import { useTranslations } from 'next-intl';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'pdfjs-dist/build/pdf.worker.entry';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import styles from './resume.module.css';

import { useTheme } from 'next-themes';
import { Button, Link } from '@nextui-org/react';

export default function ResumePage() {
  const t = useTranslations();
  const { theme } = useTheme();
  const pdfURL = '/files/kowit-resume.pdf';

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth - 50);
      const handleResize = () => setWidth(window.innerWidth - 50);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    HelperInit.InitPage({
      menuUIIsShow: { isShowHeader: true, isShowFooter: true },
      loadTimeout: 1500,
    });
  }, []);

  const downloadFile = (url: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link.remove();
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <main
      className={
        styles.fadeIn +
        ' flex min-h-[90vh] flex-col items-center justify-start scroll-smooth bg-gray-50 px-10 py-4 text-gray-900 dark:bg-gray-800 dark:text-gray-100 lg:px-24 lg:py-10'
      }
    >
      <div className="mb-3 text-2xl font-bold">{t('Resume.title')}</div>
      <div className="flex h-full w-full select-none items-center justify-center overflow-clip rounded-md shadow-lg">
        <Document file={pdfURL}>
          <Page width={width} pageNumber={1} />
        </Document>
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-x-5 p-6 pt-8">
        <Button
          className="cursor-pointer"
          href={pdfURL}
          as={Link}
          color={theme === 'light' ? 'default' : 'warning'}
          aria-label="new tab"
          isExternal
          rel="noopener noreferrer"
        >
          {t('Resume.button.newTab')}
        </Button>
        <Button
          className="cursor-pointer"
          as={Link}
          color={theme === 'light' ? 'default' : 'warning'}
          aria-label="download"
          onPress={() => downloadFile(pdfURL, 'kowit-resume.pdf')}
        >
          {t('Resume.button.download')}
        </Button>
      </div>
    </main>
  );
}
