import { Slideshow, SlideshowProps } from '@/components/image/slideshow';
import { Button, Link } from '@nextui-org/react';
import PortfolioJSON from './json/portfolio.json';
import { useTranslation } from 'react-i18next';

type PortfolioProps = {
  i18nDomainName: string;
  theme: string | undefined;
};

export const Portfolio = (props: PortfolioProps) => {
  const { t } = useTranslation([props.i18nDomainName]);

  const slideshowList: SlideshowProps['hrefList'] = PortfolioJSON.map((item) => ({
    ...item,
    type: item.type === 'image' || item.type === 'video' ? item.type : 'image',
  }));

  return (
    <div className="flex w-full max-w-[1024px] flex-col items-center justify-center py-6">
      <div id="#portfolio" className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col justify-start p-2 lg:w-[90%] lg:px-10">
          <span className="text-2xl font-bold">Portfolio (2024)</span>
          <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
            {t('Web.portfolio.subtitle')}
          </span>
        </div>
        <Slideshow hrefList={slideshowList} />
        <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
          <div className="flex h-auto w-full flex-col lg:w-[90%]">
            <span className="text-xl font-bold">{t('Web.overview')}</span>
            <span className="indent-8 text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Web.portfolio.description')}
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
                Next.js, TailwindCSS, TypeScript
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Web.library')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                Intl, Zustand
              </span>
            </span>

            <span className="mt-6 hidden items-center text-lg font-bold lg:flex">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/portfolio"
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

            <span className="mt-6 flex items-center text-lg font-bold lg:hidden">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/portfolio"
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
          </div>
        </div>
      </div>
    </div>
  );
};
