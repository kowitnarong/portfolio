import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type MuteruProps = {
  theme: string | undefined;
};

export const Muteru = (props: MuteruProps) => {
  const t = useTranslations();
  return (
    <div className="flex w-full flex-col items-center justify-center py-6">
      <div id="#muteru" className="flex w-full flex-col items-center justify-center">
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
            <span className="text-base text-gray-500">{t('Web.muteru.subtitle')}</span>
            <span className="mt-6 text-xl font-bold"> {t('Web.overview')}</span>
            <span className="text-base text-gray-400">
              {t('Home.web.muteru.description')}
            </span>

            <span className="mt-6 text-lg font-bold">
              {t('Web.role')}:{' '}
              <span className="text-base font-normal text-gray-400">
                Full Stack Developer
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Web.framework')}:{' '}
              <span className="text-base font-normal text-gray-400">
                React, Tailwind CSS, Firebase, TypeScript
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Web.library')}:{' '}
              <span className="text-base font-normal text-gray-400">
                Axios, Three.js, Phaser.js
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Web.teamSize')}:{' '}
              <span className="text-base font-normal text-gray-400">
                7 (1 Project Manager, 1 Art Director, 2 Programmer, 3 Artist)
              </span>
            </span>

            <span className="mt-4 hidden items-center text-lg font-bold lg:flex">
              {t('Web.goto')}:{' '}
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
                  {t('Web.button.click')}
                </Button>
              </span>
            </span>
          </div>

          <div className="mt-6 flex h-auto w-full flex-col lg:mt-0 lg:w-[40%]">
            <span className="flex justify-center text-xl font-bold">
              {t('Web.respon')}
            </span>
            <span className="mt-2 text-lg">
              Frontend
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>{t('Web.muteru.frontend.bullet1')}</li>
                <li>{t('Web.muteru.frontend.bullet2')}</li>
                <li>{t('Web.muteru.frontend.bullet3')}</li>
                <li>{t('Web.muteru.frontend.bullet4')}</li>
                <li>{t('Web.muteru.frontend.bullet5')}</li>
                <li>{t('Web.muteru.frontend.bullet6')}</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Backend
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>{t('Web.muteru.backend.bullet1')}</li>
                <li>{t('Web.muteru.backend.bullet2')}</li>
                <li>{t('Web.muteru.backend.bullet3')}</li>
                <li>{t('Web.muteru.backend.bullet4')}</li>
                <li>{t('Web.muteru.backend.bullet5')}</li>
                <li>{t('Web.muteru.backend.bullet6')}</li>
                <li>{t('Web.muteru.backend.bullet7')}</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              {t('Web.muteru.other.title')}
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>{t('Web.muteru.other.bullet1')}</li>
                <li>{t('Web.muteru.other.bullet2')}</li>
              </ul>
            </span>

            <span className="mt-4 flex items-center text-lg font-bold lg:hidden">
              {t('Web.goto')}:{' '}
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
                  {t('Web.button.click')}
                </Button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
