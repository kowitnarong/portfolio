'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';
import { HelperInit } from '@/globals/helpers/helpers';
import Profile from '@/app/assets/profile.webp';
import Link from 'next/link';
import { SocialMedia } from '@/app/components/layout/social-media';
import styles from './about.module.css';
import { useEffect, useState } from 'react';

export default function AboutPage() {
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
    <main
      className={
        styles.fadeIn +
        ' flex min-h-[90vh] flex-col items-center justify-start bg-gray-50 px-10 py-4 text-gray-900 dark:bg-gray-800 dark:text-gray-100 lg:px-24 lg:py-10'
      }
    >
      <div className="mb-8 mt-4 text-4xl font-bold text-black dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
        {t('About.title.name')}
      </div>
      <div className="flex w-full max-w-[1280px] flex-col items-center justify-center lg:flex-row">
        <div className="flex w-full max-w-[360px] justify-center px-4 lg:mr-6 lg:w-[40%] lg:max-w-[480px] lg:justify-end">
          <Image
            priority
            src={Profile.src}
            alt="profile"
            width={360}
            height={360}
            className="w-full rounded-full border-black shadow-md dark:border-white dark:drop-shadow-[0_0_0.3rem_#00000070]"
          />
        </div>
        <div className="mb-10 flex w-full flex-col place-items-center dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070] lg:w-[60%]">
          <div className="my-6 flex h-auto justify-center">
            <TypewriterComponent
              options={{
                strings: [t('About.title.sub1'), t('About.title.sub2')],
                autoStart: true,
                loop: true,
                delay: 50,
                wrapperClassName: 'text-md lg:text-2xl text-center',
                cursorClassName: 'text-md lg:text-2xl text-center',
              }}
            />
          </div>
          <ul className="list-inside list-disc">
            <li>{t('About.title.bullet1')}</li>
            <li>
              {t('About.title.bullet2')}{' '}
              <Link
                href="mailto:kowit.narongtuwapan@hotmail.com"
                className="font-bold text-[#004ECC] underline dark:text-white"
              >
                kowit.narongtuwapan@hotmail.com
              </Link>
            </li>
          </ul>
          <div>
            <h1 className="mb-2 mt-6 text-2xl font-bold">
              {t('About.title.general-skill')}
            </h1>
            <ul className="list-inside list-disc">
              <li>{t('About.soft skill.bullet1')}</li>
              <li>{t('About.soft skill.bullet2')}</li>
              <li>
                <span className="font-bold">
                  {t('About.soft skill.language.thai.title')}:
                </span>{' '}
                {t('About.soft skill.language.thai.description')}
              </li>
              <li>
                <span className="font-bold">
                  {t('About.soft skill.language.english.title')}:
                </span>{' '}
                {t('About.soft skill.language.english.description1') + ', '}
                {t('About.soft skill.language.english.description2')}
              </li>
            </ul>
            <h1 className="mb-2 mt-6 text-2xl font-bold">{t('About.title.web-skill')}</h1>
            <ul className="list-inside list-disc">
              <li>
                <span className="font-bold">{t('About.skill.language')}:</span>{' '}
                JavaScript, TypeScript, HTML,
              </li>
              <li>
                <span className="font-bold">{t('About.skill.framework')}:</span> React,
                Next.js, Node.js, Express.js, TailwindCSS
              </li>
              <li>
                <span className="font-bold">{t('About.skill.library')}:</span> Three.js
                (3D), Phaser (2D), Vite
              </li>
              <li>
                <span className="font-bold">{t('About.skill.database')}:</span> MySQL,
                Firebase
              </li>
              <li>
                <span className="font-bold">{t('About.skill.tool')}:</span> Git, GitHub,
                Docker, Figma, Canva, AdobeXD
              </li>
            </ul>
            <h1 className="mb-2 mt-6 text-2xl font-bold">
              {t('About.title.game-skill')}
            </h1>
            <ul className="list-inside list-disc">
              <li>
                <span className="font-bold">{t('About.skill.tool')}:</span> Unity,
                MonoGame, Unreal Engine (Visual Scripting), Phaser 2D (JavaScript)
              </li>
              <li>
                <span className="font-bold">{t('About.skill.multiplayer')}:</span> Photon
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-6 h-auto w-full items-center justify-center">
        <p className="mb-4 text-center text-2xl font-bold text-black dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          Social Media
        </p>
        <SocialMedia />
      </div>
    </main>
  );
}
