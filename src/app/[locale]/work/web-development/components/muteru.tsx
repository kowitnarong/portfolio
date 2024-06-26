import { Slideshow, SlideshowProps } from '@/app/components/image/slideshow';
import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import MuteruJSON from './json/muteru.json';

type MuteruProps = {
  theme: string | undefined;
};

export const Muteru = (props: MuteruProps) => {
  const t = useTranslations();

  const slideshowList: SlideshowProps['hrefList'] = MuteruJSON.map((item) => ({
    ...item,
    type: item.type === 'image' || item.type === 'video' ? item.type : 'image',
  }));

  return (
    <div className="flex w-full max-w-[1024px] flex-col items-center justify-center py-6">
      <div id="#muteru" className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col justify-start p-2 lg:w-[90%] lg:px-10">
          <span className="text-2xl font-bold">Muteru (2023)</span>
          <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
            {t('Web.muteru.subtitle')}
          </span>
        </div>
        <Slideshow hrefList={slideshowList} />
        <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
          <div className="flex h-auto w-full flex-col lg:w-[45%]">
            <span className="text-xl font-bold"> {t('Web.overview')}</span>
            <span className="indent-8 text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Home.web.muteru.description')}
            </span>

            <span className="mt-6 text-lg font-bold">
              {t('Web.role')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                Full Stack Developer
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Web.framework')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                React, TailwindCSS, Firebase, TypeScript
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Web.library')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                Axios, Three.js, Phaser.js
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Web.teamSize')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                7 (1 Project Manager, 1 Art Director, 2 Programmer, 3 Artist)
              </span>
            </span>

            <span className="mt-4 hidden items-center text-lg font-bold lg:flex">
              {t('Web.goto')}:{' '}
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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

          <div className="mt-6 flex h-auto w-full flex-col lg:mt-0 lg:w-[45%]">
            <span className="flex justify-center text-xl font-bold">
              {t('Web.respon')}
            </span>
            <span className="mt-2 text-lg">
              Frontend
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
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
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
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
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
                <li>{t('Web.muteru.other.bullet1')}</li>
                <li>{t('Web.muteru.other.bullet2')}</li>
              </ul>
            </span>

            <span className="mt-4 flex items-center text-lg font-bold lg:hidden">
              {t('Web.goto')}:{' '}
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
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
