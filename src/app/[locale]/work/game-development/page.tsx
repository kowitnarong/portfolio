'use client';

import { useTranslations } from 'next-intl';
import { HelperInit } from '@/globals/helpers/helpers';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './game-development.module.css';
import { Button, Link } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export default function GameDevelopmentPage() {
  const t = useTranslations();
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
    <main
      className={
        styles.fadeIn +
        ' flex min-h-[90vh] flex-col items-center justify-start bg-gray-50 px-10 py-4 text-gray-900 dark:bg-gray-800 dark:text-gray-100 lg:px-24 lg:py-10'
      }
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div
          id="castle-knight"
          className="flex w-full flex-col items-center justify-center"
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf7_Y6CCfwmyGMQlxUcJNB3Dz6Vlc6iyfEciG1WDLDQ&s"
            alt="game-development"
            priority
            width={200}
            height={200}
          />
          <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
            <div className="flex h-auto w-full flex-col lg:w-[40%]">
              <span className="text-2xl font-bold">Castle Knight (2021)</span>
              <span className="text-base text-gray-500">
                Second-year 1/64: Final Project
              </span>
              <span className="mt-6 text-xl font-bold">Overview</span>
              <span className="text-base text-gray-400">
                Castle Knight เป็นเกมที่เกี่ยวกับการผจญภัย ซึ่งตัวเกมเพลย์หลัก ๆ
                คือการต่อสู้กับศัตรูภายในฉาก
                โดยผู้เล่นจะมีความสามารถเพียงแค่โจมตีกับป้องกันเท่านั้น
                สำหรับการรับมือศัตรูที่มีความสามารถแตกต่างกันออกไป
              </span>
              <span className="mt-6 text-lg font-bold">
                Role:{' '}
                <span className="text-base font-normal text-gray-400">
                  Programmer, Project Manager, 2D Pixel Artist
                </span>
              </span>
              <span className="text-lg font-bold">
                Tools:{' '}
                <span className="text-base font-normal text-gray-400">
                  Monogame C#, Microsoft Teams, Photoshop
                </span>
              </span>
              <span className="text-lg font-bold">
                Team size: <span className="text-base font-normal text-gray-400">4</span>
              </span>
              <span className="mt-6 hidden items-center text-lg font-bold lg:flex">
                Git Repository:
                <span className="ml-2 text-base font-normal text-gray-400">
                  <Button
                    as={Link}
                    href="https://github.com/kowitnarong/Castle-Knight_Monogame"
                    target="_blank"
                    isExternal
                    size="sm"
                    color={theme === 'light' ? 'primary' : 'warning'}
                    className="text-base font-normal"
                  >
                    Click here!
                  </Button>
                </span>
              </span>
              <span className="mt-4 hidden items-center text-lg font-bold lg:flex">
                Play this game:
                <span className="ml-2 text-base font-normal text-gray-400">
                  <Button
                    as={Link}
                    href="https://github.com/kowitnarong/Castle-Knight_Monogame/releases/download/release-v1_1_1/release-v1_1_1.zip"
                    target="_blank"
                    isExternal
                    size="sm"
                    color={theme === 'light' ? 'primary' : 'warning'}
                    className="text-base font-normal"
                  >
                    Download!
                  </Button>
                </span>
              </span>
            </div>

            <div className="mt-6 flex h-auto w-full flex-col lg:mt-0 lg:w-[40%]">
              <span className="flex justify-center text-xl font-bold">
                Responsible work
              </span>
              <span className="mt-6 text-lg">
                Programmer
                <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                  <li>สร้างโครงร่างของเกม และการนำเข้า Assets</li>
                  <li>สร้างระบบการรับค่าจากผู้เล่น</li>
                  <li>สร้างระบบการต่อสู้ของตัวละคร ระบบเลือด</li>
                  <li>สร้างพฤติกรรมของศัตรู และเงื่อนไขการทำงานต่าง ๆ ภายในเกม</li>
                  <li>สร้างระบบการเปลี่ยนฉาก ระบบเสียง และระบบเซฟข้อมูล</li>
                </ul>
              </span>

              <span className="mt-6 text-lg">
                Project Manager
                <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                  <li>สร้างปฏิทินสำหรับกำหนดการส่งงานของแต่ละคน</li>
                  <li>ติดตามงานผ่าน Tasks ใน Microsoft Teams</li>
                  <li>คอยอัพเดตงาน จัดการประชุม และรวบรวมงานจากคนในทีม</li>
                  <li>จัดการความเป็นระเบียบของงานก่อน Merge เข้า GitHub</li>
                </ul>
              </span>

              <span className="mt-6 text-lg">
                2D Pixel Artist
                <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                  <li>วาด Animation การเดิน และการโจมตีของตัวละคร</li>
                  <li>วาด Animation ต่าง ๆ ของ ศัตรู</li>
                  <li>วาด Effect ต่าง ๆ ในเกม</li>
                </ul>
              </span>

              <span className="mt-6 flex items-center text-lg font-bold lg:hidden">
                Git Repository:
                <span className="ml-2 text-base font-normal text-gray-400">
                  <Button
                    as={Link}
                    href="https://github.com/kowitnarong/Castle-Knight_Monogame"
                    target="_blank"
                    isExternal
                    size="sm"
                    color={theme === 'light' ? 'primary' : 'warning'}
                    className="text-base font-normal"
                  >
                    Click here!
                  </Button>
                </span>
              </span>
              <span className="mt-4 flex items-center text-lg font-bold lg:hidden">
                Play this game:
                <span className="ml-2 text-base font-normal text-gray-400">
                  <Button
                    as={Link}
                    href="https://github.com/kowitnarong/Castle-Knight_Monogame/releases/download/release-v1_1_1/release-v1_1_1.zip"
                    target="_blank"
                    isExternal
                    size="sm"
                    color={theme === 'light' ? 'primary' : 'warning'}
                    className="text-base font-normal"
                  >
                    Download!
                  </Button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}