import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';

type DawnProps = {
  theme: string | undefined;
};

export const Dawn = (props: DawnProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6">
      <div id="dawn" className="flex w-full flex-col items-center justify-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf7_Y6CCfwmyGMQlxUcJNB3Dz6Vlc6iyfEciG1WDLDQ&s"
          alt="game-development"
          priority
          width={200}
          height={200}
        />
        <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
          <div className="flex h-auto w-full flex-col lg:w-[40%]">
            <span className="text-2xl font-bold">Dawn (2023)</span>
            <span className="text-base text-gray-500">
              Third-year 2/65: Final Project (Multiplayer)
            </span>
            <span className="mt-6 text-xl font-bold">Overview</span>
            <span className="text-base text-gray-400">
              Dawn เป็นเกม 3D ผู้เล่น 2 คน ผ่าน Online
              โดยผู้เล่นจะต้องช่วยกันพาลูกนกขึ้นไปยังรัง เกมนี้ผู้เล่นต้องอาศัยการร่วมมือ
              และความสามัคคีเพื่อให้ผ่านด่านไปให้ได้ โดยลูกนกสามารถเปลี่ยนธาตุต่าง ๆ
              ให้เหมาะสมกับสภาพแวดล้อมในเกม
            </span>
            <span className="mt-2 text-lg font-bold">
              Number of Players:{' '}
              <span className="text-base font-normal text-gray-400">2 (Online)</span>
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
                Unity C#, Photon, Git, Microsoft Teams
              </span>
            </span>
            <span className="text-lg font-bold">
              Team size:{' '}
              <span className="text-base font-normal text-gray-400">
                5 (1 Programer, 3 Artist, 1 Game Designer)
              </span>
            </span>
            <span className="mt-6 hidden items-center text-lg font-bold lg:flex">
              Git Repository:
              <span className="ml-2 text-base font-normal text-gray-400">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Dawn"
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
                  href="https://github.com/kowitnarong/Dawn/releases/download/release-v1_0/Build.zip"
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
                <li>สร้างระบบการหาห้องของผู้เล่นโดยใช้ Photon</li>
                <li>สร้างระบบการควบคุมในเกมสำหรับผู้เล่น 2 คน</li>
                <li>สร้างระบบธาตุต่าง ๆ ภายในเกมตามการออกแบบ</li>
                <li>
                  สร้างระบบการส่งค่าระหว่างผู้เล่นโดยใช้เทคนิค Lag Compensation
                  เพื่อลดอาการหน่วง
                </li>
                <li>สร้างระบบเสียง และการเปลี่ยนฉากให้เป็น Singletons</li>
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
                  href="https://github.com/kowitnarong/Dawn"
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
                  href="https://github.com/kowitnarong/Dawn/releases/download/release-v1_0/Build.zip"
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
