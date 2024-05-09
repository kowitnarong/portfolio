import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type DocumentsMasterProps = {
  theme: string | undefined;
};

export const DocumentsMaster = (props: DocumentsMasterProps) => {
  const t = useTranslations();

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
              {t('Game.documents-master.subtitle')}
            </span>
            <span className="mt-6 text-xl font-bold">Overview</span>
            <span className="text-base text-gray-400">
              {t('Home.game.documents-master.description')}
            </span>
            <span className="mt-2 text-lg font-bold">
              {t('Game.numOfPlayers')}:{' '}
              <span className="text-base font-normal text-gray-400">1 - 2</span>
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
                Unity C#, Git, Microsoft Teams
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.teamSize')}:{' '}
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
                  {t('Game.button.click')}
                </Button>
              </span>
            </span>
            <span className="mt-4 hidden items-center text-lg font-bold lg:flex">
              {t('Game.play')}:
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
                  {t('Game.button.download')}
                </Button>
              </span>
            </span>
          </div>

          <div className="mt-6 flex h-auto w-full flex-col lg:mt-0 lg:w-[40%]">
            <span className="flex justify-center text-xl font-bold">
              {t('Game.respon')}
            </span>
            <span className="mt-2 text-lg">
              Programmer
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>{t('Game.documents-master.programmer.bullet1')}</li>
                <li>{t('Game.documents-master.programmer.bullet2')}</li>
                <li>{t('Game.documents-master.programmer.bullet3')}</li>
                <li>{t('Game.documents-master.programmer.bullet4')}</li>
                <li>{t('Game.documents-master.programmer.bullet5')}</li>
                <li>{t('Game.documents-master.programmer.bullet6')}</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Project Manager
              <ul className="ml-2 list-inside list-disc text-base text-gray-400">
                <li>{t('Game.documents-master.project-manager.bullet1')}</li>
                <li>{t('Game.documents-master.project-manager.bullet2')}</li>
                <li>{t('Game.documents-master.project-manager.bullet3')}</li>
                <li>{t('Game.documents-master.project-manager.bullet4')}</li>
                <li>{t('Game.documents-master.project-manager.bullet5')}</li>
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
                  {t('Game.button.click')}
                </Button>
              </span>
            </span>
            <span className="mt-4 flex items-center text-lg font-bold lg:hidden">
              {t('Game.play')}:
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
                  {t('Game.button.download')}
                </Button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
