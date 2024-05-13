import { Slideshow } from '@/app/components/image/slideshow';
import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

type NetZeroProps = {
  theme: string | undefined;
};

export const NetZero = (props: NetZeroProps) => {
  const t = useTranslations();

  return (
    <div className="flex w-full max-w-[1024px] flex-col items-center justify-center py-6">
      <div id="#net-zero" className="flex w-full flex-col items-center justify-center">
        <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
          <div className="flex h-auto w-full flex-col lg:w-[45%]">
            <span className="text-2xl font-bold">Net Zero (2024)</span>
            <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Web.net-zero.subtitle')}
            </span>

            <Slideshow
              hrefList={[
                {
                  href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVB_jHALvaVy6fX4l_o4xOsA6Hj4KLx9kj8Kowg1xFw&s',
                  type: 'image',
                  thumbnail: '',
                  alt: 'castle-knight',
                },
                {
                  href: 'https://robertmarshall.dev/static/965c61c79da9aefaaf6ed51af84d9340/923ac/testing-images-in-react-with-jest.jpg',
                  type: 'image',
                  thumbnail: '',
                  alt: 'castle-knight',
                },
                {
                  href: 'https://robertmarshall.dev/static/965c61c79da9aefaaf6ed51af84d9340/923ac/testing-images-in-react-with-jest.jpg',
                  type: 'image',
                  thumbnail: '',
                  alt: 'castle-knight',
                },
              ]}
            />

            <span className="text-xl font-bold">{t('Web.overview')}</span>
            <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Home.web.net-zero.description')}
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
                Axios, Three.js
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Web.teamSize')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                8 (1 Project Manager, 1 Art Director, 3 Programmer, 3 Artist)
              </span>
            </span>

            <span className="mt-4 hidden items-center text-lg font-bold lg:flex">
              {t('Web.goto')}:{' '}
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://netzero-cmu.web.app"
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
                <li>{t('Web.net-zero.frontend.bullet1')}</li>
                <li>{t('Web.net-zero.frontend.bullet2')}</li>
                <li>{t('Web.net-zero.frontend.bullet3')}</li>
                <li>{t('Web.net-zero.frontend.bullet4')}</li>
                <li>{t('Web.net-zero.frontend.bullet5')}</li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Backend
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
                <li>{t('Web.net-zero.backend.bullet1')}</li>
                <li>{t('Web.net-zero.backend.bullet2')}</li>
                <li>{t('Web.net-zero.backend.bullet3')}</li>
                <li>{t('Web.net-zero.backend.bullet4')}</li>
                <li>{t('Web.net-zero.backend.bullet5')}</li>
              </ul>
            </span>

            <span className="mt-4 flex items-center text-lg font-bold lg:hidden">
              {t('Web.goto')}:{' '}
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://netzero-cmu.web.app"
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
