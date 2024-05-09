import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';

type DocumentsMasterProps = {
  theme: string | undefined;
};

export const DocumentsMaster = (props: DocumentsMasterProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6">
      <div
        id="#documents-master"
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
            <span className="text-2xl font-bold">Documents Master (2022)</span>
            <span className="text-base text-gray-500">
              Third-year 1/65: Final Project
            </span>
            <span className="mt-6 text-xl font-bold">Overview</span>
            <span className="text-base text-gray-400">
              Documents Master เป็นเกม 3D Top-Down ที่เกี่ยวกับการจำลองการจัดการเอกสาร
              ในมหาวิทยาลัยเชียงใหม่ โดยตัวเกมจะอ้างอิงรูปแบบการเล่นจากเกม ที่มีชื่อว่า
              Overcooked โดยผู้เล่นจะต้องทำงานตามคำสั่งที่ถูกสุ่มให้ทันเวลา
            </span>
            <span className="mt-2 text-lg font-bold">
              Number of Players:{' '}
              <span className="text-base font-normal text-gray-400">1 - 2</span>
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
                Unity C#, Git, Microsoft Teams
              </span>
            </span>
            <span className="text-lg font-bold">
              Team size:{' '}
              <span className="text-base font-normal text-gray-400">
                2 (1 Programmer, 1 Game Designer)
              </span>
            </span>
            <span className="mt-6 hidden items-center text-lg font-bold lg:flex">
              Git Repository:
              <span className="ml-2 text-base font-normal text-gray-400">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Documents-Master_Unity"
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
                  href="https://github.com/kowitnarong/Documents-Master_Unity/releases/download/release-v1_0/release-v1_0.zip"
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

          <div className="mt-6 flex h-auto w-full flex-col lg:mt-0 lg:w-[40%]">
            <span className="flex justify-center text-xl font-bold">
              Responsible work
            </span>
            <span className="mt-2 text-lg">
              Programmer
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>สร้างโครงร่างของเกม และการนำเข้า Assets</li>
                <li>สร้างระบบการรับค่าจากผู้เล่น 2 คน ใน 1 จอ</li>
                <li>สร้างระบบการเลือกระดับความยากโดยใช้ Scriptable Object</li>
                <li>สร้างระบบการส่ง Order ภายในเกม และขั้นตอนต่าง ๆ ในการทำ Order</li>
                <li>สร้างระบบการคิดคะแนนหลังจบเกม และคำนวณออกมาเป็นดาวที่ผู้เล่นได้</li>
                <li>สร้างระบบเสียง และการเปลี่ยนฉากให้เป็น Singletons</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Project Manager
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>ทำหน้าที่นำเสนอตัวงานให้กับอาจารย์ในรายวิชา</li>
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
                  href="https://github.com/kowitnarong/Documents-Master_Unity"
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
                  href="https://github.com/kowitnarong/Documents-Master_Unity/releases/download/release-v1_0/release-v1_0.zip"
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
