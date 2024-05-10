import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type CastleKnightProps = {
  theme: string | undefined;
};

export const CastleKnight = (props: CastleKnightProps) => {
  const t = useTranslations();

  return (
    <div className="flex w-full max-w-[1024px] flex-col items-center justify-center py-6">
      <div
        id="#castle-knight"
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
          <div className="flex h-auto w-full flex-col lg:w-[45%]">
            <span className="text-2xl font-bold">Castle Knight (2021)</span>
            <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Game.castle-knight.subtitle')}
            </span>
            <span className="mt-6 text-xl font-bold"> {t('Game.overview')}</span>
            <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Home.game.castle-knight.description')}
            </span>
            <span className="mt-2 text-lg font-bold">
              {t('Game.numOfPlayers')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                1
              </span>
            </span>
            <span className="mt-6 text-lg font-bold">
              {t('Game.role')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                Programmer, Project Manager, 2D Pixel Artist
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.tools')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                Monogame C#, Git, Microsoft Teams, Photoshop,
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.teamSize')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                4 (1 Programer, 2 Artists, 1 Game Designer)
              </span>
            </span>
            <span className="mt-6 hidden items-center text-lg font-bold lg:flex">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Castle-Knight_Monogame"
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
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Castle-Knight_Monogame/releases/download/release-v1_1_1/release-v1_1_1.zip"
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

          <div className="mt-6 flex h-auto w-full flex-col lg:mt-0 lg:w-[45%]">
            <span className="flex justify-center text-xl font-bold">
              {t('Game.respon')}
            </span>
            <span className="mt-2 text-lg">
              Programmer
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
                <li>{t('Game.castle-knight.programmer.bullet1')}</li>
                <li>{t('Game.castle-knight.programmer.bullet2')}</li>
                <li>{t('Game.castle-knight.programmer.bullet3')}</li>
                <li>{t('Game.castle-knight.programmer.bullet4')}</li>
                <li>{t('Game.castle-knight.programmer.bullet5')}</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Project Manager
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
                <li>{t('Game.castle-knight.project-manager.bullet1')}</li>
                <li>{t('Game.castle-knight.project-manager.bullet2')}</li>
                <li>{t('Game.castle-knight.project-manager.bullet3')}</li>
                <li>{t('Game.castle-knight.project-manager.bullet4')}</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              2D Pixel Artist
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
                <li>{t('Game.castle-knight.pixel-artist.bullet1')}</li>
                <li>{t('Game.castle-knight.pixel-artist.bullet2')}</li>
                <li>{t('Game.castle-knight.pixel-artist.bullet3')}</li>
              </ul>
            </span>

            <span className="mt-6 flex items-center text-lg font-bold lg:hidden">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Castle-Knight_Monogame"
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
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Castle-Knight_Monogame/releases/download/release-v1_1_1/release-v1_1_1.zip"
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
