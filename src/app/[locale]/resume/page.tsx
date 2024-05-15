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
  const pdfTranscriptThaiURL = '/files/transcript-th.pdf';
  const pdfTranscriptEngURL = '/files/transcript-en.pdf';

  const [width, setWidth] = useState(0);

  const handleResize = () => {
    const container = document.getElementById('pdf-container');
    if (container) {
      const containerWidth = container.offsetWidth;
      if (containerWidth > 960) {
        setWidth(960);
      } else {
        setWidth(containerWidth);
      }
    }
  };

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <main
      className={
        styles.fadeIn +
        ' flex min-h-[90vh] flex-col items-center justify-start scroll-smooth bg-gray-50 px-10 py-4 text-gray-900 dark:bg-gray-800 dark:text-gray-100 lg:px-24 lg:py-10'
      }
    >
      <div className="mb-8 mt-4 text-4xl font-bold">{t('Resume.title')}</div>
      <div
        id="pdf-container"
        className="flex h-full w-full select-none items-center justify-center"
      >
        <Document
          className="w-full max-w-[960px] overflow-clip rounded-md shadow-lg"
          file={pdfURL}
        >
          <Page width={width} pageNumber={1} />
        </Document>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-x-5 gap-y-4 p-6 pt-8 md:flex-row">
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
      <div className="mb-4 mt-8 text-4xl font-bold">{t('Resume.transcript')}</div>
      <div className="flex w-full flex-col items-center justify-center gap-x-5 gap-y-4 p-6 pt-8 md:flex-row">
        <div className="flex items-center justify-center gap-x-2">
          <p>{t('Resume.thai-version')}:</p>
          <Button
            className="cursor-pointer"
            href={pdfTranscriptThaiURL}
            as={Link}
            color={theme === 'light' ? 'default' : 'warning'}
            aria-label="download transcript thai"
            isExternal
            rel="noopener noreferrer"
          >
            {t('Resume.button.click')}
          </Button>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <p>{t('Resume.english-version')}:</p>
          <Button
            className="cursor-pointer"
            href={pdfTranscriptEngURL}
            as={Link}
            color={theme === 'light' ? 'default' : 'warning'}
            aria-label="download transcript english"
            isExternal
            rel="noopener noreferrer"
          >
            {t('Resume.button.click')}
          </Button>
        </div>
      </div>
    </main>
  );
}
