import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';

type MuteruProps = {
  theme: string | undefined;
};

export const Muteru = (props: MuteruProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6">
      <div id="muteru" className="flex w-full flex-col items-center justify-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf7_Y6CCfwmyGMQlxUcJNB3Dz6Vlc6iyfEciG1WDLDQ&s"
          alt="game-development"
          priority
          width={200}
          height={200}
        />
        <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
          <div className="flex h-auto w-full flex-col lg:w-[40%]">
            <span className="text-2xl font-bold">Muteru (2023)</span>
            <span className="text-base text-gray-500">
              Web Application สำหรับการท่องเที่ยว
            </span>
            <span className="mt-6 text-xl font-bold">Overview</span>
            <span className="text-base text-gray-400">
              Muteru
              แอพพลิเคชั่นสำหรับนักเดินทางที่สนใจในโชคลาภและไสยศาสตร์ผ่านเส้นทางการเดินทาง
              เสริมความรัก และความศรัทธา ไม่ว่าจะเส้นทางไหน มูเตลู
              จะช่วยเสริมดวงชะตาให้ชีวิตคุณประสบความสำเร็จทั้งด้านการงาน การงาน
              และชีวิตส่วนตัว
            </span>

            <span className="mt-6 text-lg font-bold">
              Role:{' '}
              <span className="text-base font-normal text-gray-400">
                Full Stack Developer
              </span>
            </span>
            <span className="text-lg font-bold">
              Framework:{' '}
              <span className="text-base font-normal text-gray-400">
                React, Tailwind CSS, Firebase, TypeScript
              </span>
            </span>
            <span className="text-lg font-bold">
              Library:{' '}
              <span className="text-base font-normal text-gray-400">
                Axios, Three.js, Phaser.js
              </span>
            </span>
            <span className="text-lg font-bold">
              Team size:{' '}
              <span className="text-base font-normal text-gray-400">
                7 (1 Project Manager, 1 Art Director, 2 Programmer, 3 Artist)
              </span>
            </span>

            <span className="mt-4 hidden items-center text-lg font-bold lg:flex">
              Go to website:{' '}
              <span className="ml-2 text-base font-normal text-gray-400">
                <Button
                  as={Link}
                  href="https://camt-muteru.web.app"
                  target="_blank"
                  isExternal
                  size="sm"
                  color={props.theme === 'light' ? 'primary' : 'warning'}
                  className="text-base font-normal"
                >
                  Click!
                </Button>
              </span>
            </span>
          </div>

          <div className="mt-6 flex h-auto w-full flex-col lg:mt-0 lg:w-[40%]">
            <span className="flex justify-center text-xl font-bold">
              Responsible work
            </span>
            <span className="mt-2 text-lg">
              Frontend
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>สร้างหน้าตาเว็บไชต์ตามการออกแบบใน Figma</li>
                <li>ใช้ Three.js ในการสร้างเกม 3D บนเว็บไซต์</li>
                <li>ใช้ Phaser.js ในการสร้างเกม 2D บนเว็บไซต์</li>
                <li>นำการตั้งค่าต่าง ๆ จาก Firebase มาใช้</li>
                <li>สร้างระบบการเปลี่ยนภาษา และ font</li>
                <li>สร้างหน้าต่าง Backoffice สำหรับ Staff, Admin</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Backend
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>สร้างฐานข้อมูลใน Firebase</li>
                <li>ออกแบบฐานข้อมูลแบบ Relational Database</li>
                <li>
                  ออกแบบการเก็บข้อมูลให้รองรับการขยายตัว และสามรถเก็บ Activity
                  ของผู้ใช้งาน
                </li>
                <li>สร้าง API ของ Firebase สำหรับการส่งค่าไปยังหน้าบ้าน</li>
                <li>สร้างระบบ Authentication สำหรับการลงชื่อเข้าใช้ผ่าน Third Party</li>
                <li>จัดการส่งค่า API ไปยังแอปพลิเคชันอื่น ๆ ที่อยู่ในโครงการ</li>
                <li>สร้างระบบ Token สำหรับการให้รางวัลกับผู้ใช้งาน</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              อื่น ๆ
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>
                  นำเสนอ และเข้าร่วมการประชุมกับทีมอื่น ๆ เพื่อหารือเกี่ยวกับการสร้าง API
                </li>
                <li>ลงพื้นที่ และทดสอบปัญหากับผู้ใช้งานจริง</li>
              </ul>
            </span>

            <span className="mt-4 flex items-center text-lg font-bold lg:hidden">
              Go to website:{' '}
              <span className="ml-2 text-base font-normal text-gray-400">
                <Button
                  as={Link}
                  href="https://camt-muteru.web.app"
                  target="_blank"
                  isExternal
                  size="sm"
                  color={props.theme === 'light' ? 'primary' : 'warning'}
                  className="text-base font-normal"
                >
                  Click!
                </Button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
