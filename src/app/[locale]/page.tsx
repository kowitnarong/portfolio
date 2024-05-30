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

  const webProjects = [
    {
      title: t('Home.web.muteru.title'),
      src: '/files/images/muteru/1.webp',
      description: t('Home.web.muteru.description'),
      href: '/work/web-development#muteru',
      alt: 'muteru',
    },
    {
      title: t('Home.web.net-zero.title'),
      src: '/files/images/net-zero/2.webp',
      description: t('Home.web.net-zero.description'),
      href: '/work/web-development#net-zero',
      alt: 'net zero',
    },
    {
      title: t('Home.web.portfolio.title'),
      src: '/files/images/portfolio/1.webp',
      description: t('Home.web.portfolio.description'),
      href: '/work/web-development#portfolio',
      alt: 'portfolio',
    },
  ];

  const gameProjects = [
    {
      title: t('Home.game.castle-knight.title'),
      src: '/files/images/castle-knight/4.webp',
      description: t('Home.game.castle-knight.description'),
      href: '/work/game-development#castle-knight',
      alt: 'castle knight',
    },
    {
      title: t('Home.game.demon-hunter.title'),
      src: '/files/images/demon-hunter/3.webp',
      description: t('Home.game.demon-hunter.description'),
      href: '/work/game-development#demon-hunter',
      alt: 'demon hunter',
    },
    {
      title: t('Home.game.documents-master.title'),
      src: '/files/images/documents-master/8.webp',
      description: t('Home.game.documents-master.description'),
      href: '/work/game-development#documents-master',
      alt: 'documents master',
    },
    {
      title: t('Home.game.dawn.title'),
      src: '/files/images/dawn/4.webp',
      description: t('Home.game.dawn.description'),
      href: '/work/game-development#dawn',
      alt: 'dawn',
    },
  ];

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
          <br />
          <br />
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
          {webProjects.map((project) => (
            <ImageOverlay
              key={project.title}
              className="h-80 w-80"
              src={project.src}
              href={project.href}
              alt={project.alt}
              textTitle={project.title}
              textDescription={project.description}
            />
          ))}
        </div>
      </div>
      <div className="mb-5 mt-10 w-full items-center justify-center">
        <span className="flex w-full items-center justify-center text-xl">
          {t('Home.game.title')}
        </span>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {gameProjects.map((project) => (
            <ImageOverlay
              key={project.title}
              className="h-80 w-80"
              src={project.src}
              href={project.href}
              alt={project.alt}
              textTitle={project.title}
              textDescription={project.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
