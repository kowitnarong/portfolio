import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type DawnProps = {
  theme: string | undefined;
};

export const Dawn = (props: DawnProps) => {
  const t = useTranslations();

  return (
    <div className="flex w-full flex-col items-center justify-center py-6">
      <div id="#dawn" className="flex w-full flex-col items-center justify-center">
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
            <span className="text-base text-gray-500">{t('Game.dawn.subtitle')}</span>
            <span className="mt-6 text-xl font-bold">{t('Game.overview')}</span>
            <span className="text-base text-gray-400">
              {t('Home.game.dawn.description')}
            </span>
            <span className="mt-2 text-lg font-bold">
              {t('Game.numOfPlayers')}:{' '}
              <span className="text-base font-normal text-gray-400">2 (Online)</span>
            </span>
            <span className="mt-6 text-lg font-bold">
              {t('Game.role')}:{' '}
              <span className="text-base font-normal text-gray-400">
                Programmer, Project Manager
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.tools')}:{' '}
              <span className="text-base font-normal text-gray-400">
                Unity C#, Photon, Git, Microsoft Teams
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.teamSize')}:{' '}
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
                  {t('Game.button.click')}
                </Button>
              </span>
            </span>
            <span className="mt-4 hidden items-center text-lg font-bold lg:flex">
              {t('Game.play')}:
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
                  {t('Game.button.download')}
                </Button>
              </span>
            </span>
          </div>

          <div className="mt-2 flex h-auto w-full flex-col lg:mt-0 lg:w-[40%]">
            <span className="flex justify-center text-xl font-bold">
              {t('Game.respon')}
            </span>
            <span className="mt-2 text-lg">
              Programmer
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>{t('Game.dawn.programmer.bullet1')}</li>
                <li>{t('Game.dawn.programmer.bullet2')}</li>
                <li>{t('Game.dawn.programmer.bullet3')}</li>
                <li>{t('Game.dawn.programmer.bullet4')}</li>
                <li>{t('Game.dawn.programmer.bullet5')}</li>
                <li>{t('Game.dawn.programmer.bullet6')}</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Project Manager
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>{t('Game.dawn.project-manager.bullet1')}</li>
                <li>{t('Game.dawn.project-manager.bullet2')}</li>
                <li>{t('Game.dawn.project-manager.bullet3')}</li>
                <li>{t('Game.dawn.project-manager.bullet4')}</li>
                <li>{t('Game.dawn.project-manager.bullet5')}</li>
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
