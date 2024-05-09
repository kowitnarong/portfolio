import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';

type DemonHunterProps = {
  theme: string | undefined;
};

export const DemonHunter = (props: DemonHunterProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6">
      <div
        id="#demon-hunter"
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
            <span className="text-2xl font-bold">Demon Hunter (2022)</span>
            <span className="text-base text-gray-500">
              Second-year 2/64: Final Project
            </span>
            <span className="mt-6 text-xl font-bold">Overview</span>
            <span className="text-base text-gray-400">
              Demon Hunter เป็นเกม 2D Top-Down ที่ต้องจัดการมอนสเตอร์ที่เข้ามาหาผู้เล่น
              โดยผู้เล่นจะสามารถควบคุมได้ 4 ทิศทาง และมีอาวุธเป็นปืน
              ในเกมจะมีไอเท็มที่ดรอปมาจากมอนสเตอร์ เพื่อเพิ่มบัพการโจมตีให้กับผู้เล่น
              ผู้เล่นจะต้องอยู่ให้รอดจนหมดเวลาจึงจะชนะ
            </span>
            <span className="mt-2 text-lg font-bold">
              Number of Players:{' '}
              <span className="text-base font-normal text-gray-400">1</span>
            </span>
            <span className="mt-6 text-lg font-bold">
              Role:{' '}
              <span className="text-base font-normal text-gray-400">
                Programmer, Project Manager
              </span>
            </span>
            <span className="text-lg font-bold">
              Tools:{' '}
              <span className="text-base font-normal text-gray-400">
                Unity C#, PHP, Mysql, A* Pathfinding, Git, Microsoft Teams
              </span>
            </span>
            <span className="text-lg font-bold">
              Team size:{' '}
              <span className="text-base font-normal text-gray-400">
                3 (1 Programer, 1 Artist, 1 Game Designer)
              </span>
            </span>
            <span className="mt-6 hidden items-center text-lg font-bold lg:flex">
              Git Repository:
              <span className="ml-2 text-base font-normal text-gray-400">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Demon-Hunter_Unity"
                  target="_blank"
                  isExternal
                  size="sm"
                  color={props.theme === 'light' ? 'primary' : 'warning'}
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
                  href="https://github.com/kowitnarong/Demon-Hunter_Unity/releases/download/release-v1_0/release-v1_0.zip"
                  target="_blank"
                  isExternal
                  size="sm"
                  color={props.theme === 'light' ? 'primary' : 'warning'}
                  className="text-base font-normal"
                >
                  Download!
                </Button>
              </span>
            </span>
          </div>

          <div className="mt-2 flex h-auto w-full flex-col lg:mt-0 lg:w-[40%]">
            <span className="flex justify-center text-xl font-bold">
              Responsible work
            </span>
            <span className="mt-6 text-lg">
              Programmer
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>สร้างโครงร่างของเกม และการนำเข้า Assets</li>
                <li>สร้างมอนสเตอร์ต่าง ๆ ให้วิ่งเข้าหาผู้เล่นโดยใช้ A* Pathfinding</li>
                <li>สร้างระบบการควมคุมของผู้เล่น และระบบการใช้ไอเท็ม</li>
                <li>สร้างระบบการนับเวลา การเปลี่ยนฉาก และเสียง</li>
                <li>
                  สร้างระบบการเก็บคะแนนของผู้เล่นบันทึกไปยังฐานข้อมูล Mysql โดยใช้ PHP
                </li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Project Manager
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>เป็นตัวกลางผสานงานภายในทีม</li>
                <li>คอยอัพเดตงาน จัดการประชุม และรวบรวมงานจากคนในทีม</li>
                <li>สร้างปฏิทินสำหรับกำหนดการส่งงานของแต่ละคน</li>
                <li>ติดตามงานผ่าน Tasks ใน Microsoft Teams</li>
                <li>จัดการความเป็นระเบียบของงานก่อน Merge เข้า GitHub</li>
              </ul>
            </span>

            <span className="mt-6 flex items-center text-lg font-bold lg:hidden">
              Git Repository:
              <span className="ml-2 text-base font-normal text-gray-400">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Demon-Hunter_Unity"
                  target="_blank"
                  isExternal
                  size="sm"
                  color={props.theme === 'light' ? 'primary' : 'warning'}
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
                  href="https://github.com/kowitnarong/Demon-Hunter_Unity/releases/download/release-v1_0/release-v1_0.zip"
                  target="_blank"
                  isExternal
                  size="sm"
                  color={props.theme === 'light' ? 'primary' : 'warning'}
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
  );
};
