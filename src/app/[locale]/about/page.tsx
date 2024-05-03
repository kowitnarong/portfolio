'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';
import { HelperInit } from '@/globals/helpers/helpers';
import Profile from '@/app/assets/profile.webp';
import Link from 'next/link';
import { SocialMedia } from '@/app/components/layout/social-media';
import styles from './about.module.css';
import { useEffect } from 'react';

export default function AboutPage() {
  const t = useTranslations();

  useEffect(() => {
    HelperInit.InitPage({
      menuUIIsShow: { isShowHeader: true, isShowFooter: true },
      loadTimeout: 1500,
    });
  }, []);

  return (
    <main
      className={
        styles.fadeIn +
        ' flex flex-col min-h-screen bg-gray-50 py-4 px-10 text-gray-900 items-center justify-start lg:py-10 lg:px-24 dark:bg-gray-800 dark:text-gray-100'
      }
    >
      <div className="font-bold mt-4 text-black mb-8 text-4xl dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
        About Me
      </div>
      <div className="flex-col flex w-full items-center justify-center lg:flex-row">
        <div className="flex w-full max-w-[360px] px-4 justify-center lg:max-w-[480px] lg:w-[40%] lg:justify-end">
          <Image
            priority
            src={Profile.src}
            alt="profile"
            width={360}
            height={360}
            className="border-black rounded-full shadow-md w-full dark:border-white dark:drop-shadow-[0_0_0.3rem_#00000070]"
          />
        </div>
        <div className="flex flex-col mb-10 w-full place-items-center lg:w-[60%] dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          <div className="flex h-auto my-6 justify-center">
            <TypewriterComponent
              options={{
                strings: [
                  'Hi, my name is Kowit Narongtuwapan 👋.',
                  'I am a Web & Game Developer.',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                wrapperClassName: 'text-md lg:text-2xl text-center',
                cursorClassName: 'text-md lg:text-2xl text-center',
              }}
            />
          </div>
          <ul className="list-disc list-inside">
            <li>I'm based in Chiang Mai, Thailand.</li>
            <li>
              You can contact me at{' '}
              <Link
                href="mailto:kowit.narongtuwapan@hotmail.com"
                className="font-bold underline"
              >
                kowit.narongtuwapan@hotmail.com
              </Link>
            </li>
          </ul>
          <div>
            <h1 className="font-bold mt-6 mb-2 text-2xl">Web Developer Skills</h1>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Languages:</span> JavaScript, TypeScript,
                HTML,
              </li>
              <li>
                <span className="font-bold">Frameworks:</span> React, Next.js, Node.js,
                Express.js, TailwindCSS
              </li>
              <li>
                <span className="font-bold">Libraries:</span> Three.js (3D), Phaser (2D),
                Vite
              </li>
              <li>
                <span className="font-bold">Database:</span> MySQL, Firebase
              </li>
              <li>
                <span className="font-bold">Tools:</span> Git, GitHub, Docker, Figma,
                Canva, AdobeXD
              </li>
            </ul>
            <h1 className="font-bold mt-6 mb-2 text-2xl">Game Developer Skills</h1>
            <ul className="list-disc list-inside">
              <li>
                <span className="font-bold">Tools:</span> Unity, Monogame, Unreal Engine
                (Visual Scripting), Phaser 2D (JavaScript)
              </li>
              <li>
                <span className="font-bold">Multiplayer:</span> Photon
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-auto mb-6 w-full justify-center items-center">
        <p className="font-bold text-center text-black mb-4 text-2xl dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          Social Media
        </p>
        <SocialMedia />
      </div>
    </main>
  );
}
