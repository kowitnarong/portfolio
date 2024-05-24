'use client';

import { useTranslations } from 'next-intl';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect, useState } from 'react';
import { ImageOverlay } from '../components/image/image-overlay';
import Link from 'next/link';

export default function Home() {
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
    <main className="fade-in flex min-h-[90vh] flex-col items-center justify-start bg-gray-50 px-10 py-4 dark:bg-gray-800 dark:text-gray-100 lg:px-24 lg:pb-10 lg:pt-6">
      <div className="mt-10 flex w-full max-w-[1024px] flex-col items-start font-bold md:pr-12">
        <span className="text-xl text-gray-500 dark:text-gray-400 dark:drop-shadow-[0_0_0.3rem_#00000070]">
          {t('Home.title.role')}
        </span>
        <span className="mt-1 text-3xl text-black dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          {t('Home.title.name')}
        </span>
        <div className="mt-4 indent-8 text-gray-500 dark:text-gray-400">
          {t('Home.title.description')}
          <br /> <br />
          {t('About.title.bullet2')}{' '}
          <Link
            href="mailto:kowit.narongtuwapan@hotmail.com"
            className="font-bold text-[#004ECC] underline dark:text-white"
          >
            kowit.narongtuwapan@hotmail.com
          </Link>
          <br />
          <ul className="mt-2 list-inside list-disc">
            <li>{t('Home.title.bullet1')}</li>
            <li>{t('Home.title.bullet2')}</li>
            <li>{t('Home.title.bullet3')}</li>
          </ul>
        </div>
      </div>

      <div className="mb-5 mt-10 w-full items-center justify-center">
        <span className="flex w-full items-center justify-center text-xl">
          {t('Home.web.title')}
        </span>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <ImageOverlay
            className="h-80 w-80"
            src="/files/images/muteru/1.webp"
            href="/work/web-development#muteru"
            alt="muteru"
            textTitle={t('Home.web.muteru.title')}
            textDescription={t('Home.web.muteru.description')}
          />
          <ImageOverlay
            className="h-80 w-80"
            src="/files/images/net-zero/2.webp"
            href="/work/web-development#net-zero"
            alt="net zero"
            textTitle={t('Home.web.net-zero.title')}
            textDescription={t('Home.web.net-zero.description')}
          />
          <ImageOverlay
            className="h-80 w-80"
            src="/files/images/portfolio/1.webp"
            href="/work/web-development#portfolio"
            alt="net zero"
            textTitle={t('Home.web.portfolio.title')}
            textDescription={t('Home.web.portfolio.description')}
          />
        </div>
      </div>
      <div className="mb-5 mt-10 w-full items-center justify-center">
        <span className="flex w-full items-center justify-center text-xl">
          {t('Home.game.title')}
        </span>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <ImageOverlay
            className="h-80 w-80"
            src="/files/images/castle-knight/4.webp"
            href="/work/game-development#castle-knight"
            alt="castle knight"
            textTitle={t('Home.game.castle-knight.title')}
            textDescription={t('Home.game.castle-knight.description')}
          />
          <ImageOverlay
            className="h-80 w-80"
            src="/files/images/demon-hunter/3.webp"
            href="/work/game-development#demon-hunter"
            alt="demon hunter"
            textTitle={t('Home.game.demon-hunter.title')}
            textDescription={t('Home.game.demon-hunter.description')}
          />
          <ImageOverlay
            className="h-80 w-80"
            src="/files/images/documents-master/8.webp"
            href="/work/game-development#documents-master"
            alt="documents master"
            textTitle={t('Home.game.documents-master.title')}
            textDescription={t('Home.game.documents-master.description')}
          />
          <ImageOverlay
            className="h-80 w-80"
            src="/files/images/dawn/4.webp"
            href="/work/game-development#dawn"
            alt="dawn"
            textTitle={t('Home.game.dawn.title')}
            textDescription={t('Home.game.dawn.description')}
          />
        </div>
      </div>
    </main>
  );
}
