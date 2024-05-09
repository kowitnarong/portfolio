'use client';

import { useTranslations } from 'next-intl';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { ImageOverlay } from '../components/image/image-overlay';
import Profile from '../assets/profile.webp';

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
    <main className="flex min-h-[90vh] flex-col items-center justify-start bg-gray-50 px-10 py-4 dark:bg-gray-800 dark:text-gray-100 lg:px-24 lg:pb-10 lg:pt-6">
      <div className="mt-10 flex w-full flex-col items-start font-bold">
        <span className="text-2xl text-gray-400 dark:drop-shadow-[0_0_0.3rem_#00000070]">
          Web & Game Developer
        </span>
        <span className="text-4xl text-black dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          Kowit Narongtuwapan
        </span>
        <div className="mt-4 text-gray-500 dark:text-gray-400">
          Get to learn about game development specifically. I can use Unity and Unreal
          Engine to create games well. Also, I can work on web development.
          <br />
          <ul className="mt-2 list-inside list-disc">
            <li> Developed 3 Unity and 1 Unreal game project at university.</li>
            <li>I Can use fundamental Maya and Figma. </li>
            <li>
              I interned in web development for 1 year (React.js, JavaScript, Typescript,
              Firebase).
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 aspect-video w-[85%] max-w-[760px]">
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          url="https://youtu.be/b2Z8GNqkVa0"
        />
      </div>
      <div className="mb-5 mt-10 w-full items-center justify-center">
        <span className="flex w-full items-center justify-center text-xl">
          Web Development Projects
        </span>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <ImageOverlay
            className="h-80 w-80"
            src={Profile.src}
            alt="profile"
            textTitle="Unity"
            textDescription="Developed 3 Unity game projects at university."
          />
          <ImageOverlay
            className="h-80 w-80"
            src={Profile.src}
            alt="profile"
            textTitle="Unreal"
            textDescription="Developed 1 Unreal game project at university."
          />
        </div>
      </div>
      <div className="mb-5 mt-10 w-full items-center justify-center">
        <span className="flex w-full items-center justify-center text-xl">
          Game Development Projects
        </span>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <ImageOverlay
            className="h-80 w-80"
            src={Profile.src}
            href="/work/game-development#castle-knight"
            alt="castle knight"
            textTitle="Castle Knight (2021)"
            textDescription="Castle Knight เป็นเกมที่เกี่ยวกับการผจญภัย ซึ่งตัวเกมเพลย์หลัก ๆ คือการต่อสู้กับศัตรูภายในฉาก โดยผู้เล่นจะมีความสามารถเพียงแค่โจมตีกับป้องกันเท่านั้น สำหรับการรับมือศัตรูที่มีความสามารถแตกต่างกันออกไป"
          />
          <ImageOverlay
            className="h-80 w-80"
            src={Profile.src}
            href="/work/game-development#demon-hunter"
            alt="demon hunter"
            textTitle="Demon Hunter (2022)"
            textDescription="Developed 1 Unreal game project at university."
          />
          <ImageOverlay
            className="h-80 w-80"
            src={Profile.src}
            href="/work/game-development#documents-master"
            alt="documents master"
            textTitle="Documents Master (2023)"
            textDescription="I Can use fundamental Maya and Figma."
          />
          <ImageOverlay
            className="h-80 w-80"
            src={Profile.src}
            href="/work/game-development#dawn"
            alt="dawn"
            textTitle="Dawn (2023)"
            textDescription="I Can use fundamental Maya and Figma."
          />
        </div>
      </div>
    </main>
  );
}
