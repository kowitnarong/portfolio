import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';

type NetZeroProps = {
  theme: string | undefined;
};

export const NetZero = (props: NetZeroProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-6">
      <div id="#net-zero" className="flex w-full flex-col items-center justify-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf7_Y6CCfwmyGMQlxUcJNB3Dz6Vlc6iyfEciG1WDLDQ&s"
          alt="game-development"
          priority
          width={200}
          height={200}
        />
        <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
          <div className="flex h-auto w-full flex-col lg:w-[40%]">
            <span className="text-2xl font-bold">Net Zero (2024)</span>
            <span className="text-base text-gray-500">
              Web Application สำหรับแสดงค่าการใช้คาร์บอน
            </span>
            <span className="mt-6 text-xl font-bold">Overview</span>
            <span className="text-base text-gray-400">
              Net Zero เป็น Web Application
              สำหรับแสดงค่าการใช้คาร์บอนที่ถูกใช้งานในมหาวิทยาลัยเชียงใหม่ โดยค่าต่าง ๆ
              จะแบ่งตามคณะ และสถานที่ในมหาวิทยาลัย หน้าเว็บไซต์จะแสดงเป็น Dashboard
              ควบคู่การใช้ 3D แสดงเป็นแผนที่
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
              <span className="text-base font-normal text-gray-400">Axios, Three.js</span>
            </span>
            <span className="text-lg font-bold">
              Team size:{' '}
              <span className="text-base font-normal text-gray-400">
                8 (1 Project Manager, 1 Art Director, 3 Programmer, 3 Artist)
              </span>
            </span>

            <span className="mt-4 hidden items-center text-lg font-bold lg:flex">
              Go to website:{' '}
              <span className="ml-2 text-base font-normal text-gray-400">
                <Button
                  as={Link}
                  href="https://netzero-cmu.web.app"
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
                <li>สร้างหน้าต่างเมนูในเว็บไซต์</li>
                <li>นำค่าต่าง ๆ ในไฟล์ JSON มาจัดเรียงใหม่</li>
                <li>สร้างระบบการเปลี่ยนภาษา และ font</li>
                <li>สร้างหน้าต่าง Backoffice สำหรับ Admin</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Backend
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>สร้างฐานข้อมูลใน Firebase</li>
                <li>ออกแบบฐานข้อมูลแบบ Relational Database</li>
                <li>
                  ใช้ Firebase Cloud Functions และ Realtime
                  สำหรับการรับข้อมูลจากฐานข้อมูลส่วนอื่น ๆ
                </li>
                <li>สร้าง API ของ Firebase สำหรับการส่งค่าไปยังหน้าบ้าน</li>
                <li>สร้างระบบการส่ง Email ไปยังผู้ใช้งานหากมีค่าที่รับมาผิดปกติ</li>
              </ul>
            </span>

            <span className="mt-4 flex items-center text-lg font-bold lg:hidden">
              Go to website:{' '}
              <span className="ml-2 text-base font-normal text-gray-400">
                <Button
                  as={Link}
                  href="https://netzero-cmu.web.app"
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
