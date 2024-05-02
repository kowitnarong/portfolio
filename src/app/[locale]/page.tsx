'use client';

import { useTranslations } from 'next-intl';
import { Image } from '@nextui-org/react';
import TypewriterComponent from 'typewriter-effect';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect } from 'react';
import Profile from '@/app/assets/profile.jpg';
import path from 'path';
import Link from 'next/link';
import { SocialMedia } from '../components/layout/social-media';

export default function Home() {
  const t = useTranslations();

  useEffect(() => {
    HelperInit.InitPage({
      menuUIIsShow: { isShowHeader: true, isShowFooter: true },
      loadTimeout: 1500,
    });
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 px-10 py-4 text-gray-900 items-center justify-start lg:px-24 lg:py-10 dark:bg-gray-800 dark:text-gray-100">
      <div className="font-bold text-4xl mt-4 mb-8 text-black dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
        Portfolio
      </div>
      <div className="flex-col lg:flex-row flex w-full items-center justify-center">
        <div className="w-full px-4 flex justify-center lg:justify-end lg:w-[40%]">
          <Image
            src={Profile.src}
            alt="profile"
            radius="full"
            shadow="md"
            width={360}
            className="border-black dark:border-white w-full dark:drop-shadow-[0_0_0.3rem_#00000070]"
          />
        </div>
        <div className="flex flex-col mb-10 w-full lg:w-[60%] place-items-center dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          <div className="my-6 h-auto">
            <TypewriterComponent
              options={{
                strings: [
                  'Hi, my name is Kowit Narongtuwapan 👋.',
                  'I am a Web Developer and Game Developer.',
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
            <h1 className="text-2xl font-bold mt-6 mb-2">Web Developer Skills</h1>
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
            <h1 className="text-2xl font-bold mt-6 mb-2">Game Developer Skills</h1>
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
      <div className="w-full mb-6 h-auto justify-center items-center">
        <p className="font-bold text-2xl mb-4 text-center text-black dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          Social Media
        </p>
        <SocialMedia />
      </div>
    </main>
  );
}
