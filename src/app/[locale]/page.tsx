'use client';

import { useTranslations } from 'next-intl';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function Home() {
  const t = useTranslations();

  useEffect(() => {
    HelperInit.InitPage({
      menuUIIsShow: { isShowHeader: true, isShowFooter: true },
      loadTimeout: 1500,
    });
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 py-4 px-10 items-center justify-start lg:py-10 lg:px-24 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col font-bold mt-10 w-full items-start">
        <span className="text-2xl text-gray-400 dark:drop-shadow-[0_0_0.3rem_#00000070]">
          Web & Game Developer
        </span>
        <span className="text-black text-4xl dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          Kowit Narongtuwapan
        </span>
        <div className="mt-4 text-gray-500 dark:text-gray-400">
          Get to learn about game development specifically. I can use Unity and Unreal
          Engine to create games well. Also, I can work on web development.
          <br />
          <ul className="list-disc list-inside mt-2">
            <li> Developed 3 Unity and 1 Unreal game project at university.</li>
            <li>I Can use fundamental Maya and Figma. </li>
            <li>
              I interned in web development for 1 year (React.js, JavaScript, Typescript,
              Firebase).
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 max-w-[760px] w-[80%] aspect-video">
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          url="https://youtu.be/b2Z8GNqkVa0"
        />
      </div>
    </main>
  );
}
