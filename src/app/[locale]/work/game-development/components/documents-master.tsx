import { Slideshow, SlideshowProps } from '@/app/components/image/slideshow';
import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import DocumentsMasterJSON from './่json/documents-master.json';

type DocumentsMasterProps = {
  theme: string | undefined;
};

export const DocumentsMaster = (props: DocumentsMasterProps) => {
  const t = useTranslations();

  const slideshowList: SlideshowProps['hrefList'] = DocumentsMasterJSON.map((item) => ({
    ...item,
    type: item.type === 'image' || item.type === 'video' ? item.type : 'image',
  }));

  return (
    <div className="flex w-full max-w-[1024px] flex-col items-center justify-center py-6">
      <div
        id="#documents-master"
        className="flex w-full flex-col items-center justify-center"
      >
        <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
          <div className="flex h-auto w-full flex-col lg:w-[45%]">
            <span className="text-2xl font-bold">Documents Master (2022)</span>
            <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Game.documents-master.subtitle')}
            </span>

            <Slideshow hrefList={slideshowList} />

            <span className="text-xl font-bold">Overview</span>
            <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Home.game.documents-master.description')}
            </span>
            <span className="mt-2 text-lg font-bold">
              {t('Game.numOfPlayers')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                1 - 2
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
                Unity C#, Git, Microsoft Teams
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.teamSize')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                2 (1 Programmer, 1 Game Designer)
              </span>
            </span>
            <span className="mt-6 hidden items-center text-lg font-bold lg:flex">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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

          <div className="mt-6 flex h-auto w-full flex-col lg:mt-0 lg:w-[45%]">
            <span className="flex justify-center text-xl font-bold">
              {t('Game.respon')}
            </span>
            <span className="mt-2 text-lg">
              Programmer
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
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
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
                <li>{t('Game.documents-master.project-manager.bullet1')}</li>
                <li>{t('Game.documents-master.project-manager.bullet2')}</li>
                <li>{t('Game.documents-master.project-manager.bullet3')}</li>
                <li>{t('Game.documents-master.project-manager.bullet4')}</li>
                <li>{t('Game.documents-master.project-manager.bullet5')}</li>
              </ul>
            </span>

            <span className="mt-6 flex items-center text-lg font-bold lg:hidden">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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
