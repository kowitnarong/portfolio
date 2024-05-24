import { Slideshow } from '@/app/components/image/slideshow';
import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { SlideshowProps } from '@/app/components/image/slideshow';
import DawnJSON from './json/dawn.json';

type DawnProps = {
  theme: string | undefined;
};

export const Dawn = (props: DawnProps) => {
  const t = useTranslations();

  const slideshowList: SlideshowProps['hrefList'] = DawnJSON.map((item) => ({
    ...item,
    type: item.type === 'image' || item.type === 'video' ? item.type : 'image',
  }));

  return (
    <div className="flex w-full max-w-[1024px] flex-col items-center justify-center py-6">
      <div id="#dawn" className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col justify-start p-2 lg:w-[90%] lg:px-10">
          <span className="text-2xl font-bold">Dawn (2023)</span>
          <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
            {t('Game.dawn.subtitle')}
          </span>
        </div>
        <Slideshow hrefList={slideshowList} />
        <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
          <div className="flex h-auto w-full flex-col lg:w-[45%]">
            <span className="text-xl font-bold">{t('Game.overview')}</span>
            <span className="indent-8 text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Home.game.dawn.description')}
            </span>
            <span className="mt-2 text-lg font-bold">
              {t('Game.numOfPlayers')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                2 (Online)
              </span>
            </span>
            <span className="mt-6 text-lg font-bold">
              {t('Game.role')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                Programmer, Project Manager
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.tools')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                Unity C#, Photon, Git, Microsoft Teams
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.teamSize')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                5 (1 Programer, 3 Artist, 1 Game Designer)
              </span>
            </span>
            <span className="mt-6 hidden items-center text-lg font-bold lg:flex">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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

          <div className="mt-2 flex h-auto w-full flex-col lg:mt-0 lg:w-[45%]">
            <span className="flex justify-center text-xl font-bold">
              {t('Game.respon')}
            </span>
            <span className="mt-2 text-lg">
              Programmer
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
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
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
                <li>{t('Game.dawn.project-manager.bullet1')}</li>
                <li>{t('Game.dawn.project-manager.bullet2')}</li>
                <li>{t('Game.dawn.project-manager.bullet3')}</li>
                <li>{t('Game.dawn.project-manager.bullet4')}</li>
                <li>{t('Game.dawn.project-manager.bullet5')}</li>
              </ul>
            </span>

            <span className="mt-6 flex items-center text-lg font-bold lg:hidden">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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
