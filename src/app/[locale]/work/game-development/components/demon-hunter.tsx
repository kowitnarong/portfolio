import { Slideshow } from '@/app/components/image/slideshow';
import { Button, Link } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

type DemonHunterProps = {
  theme: string | undefined;
};

export const DemonHunter = (props: DemonHunterProps) => {
  const t = useTranslations();
  return (
    <div className="flex w-full max-w-[1024px] flex-col items-center justify-center py-6">
      <div
        id="#demon-hunter"
        className="flex w-full flex-col items-center justify-center"
      >
        <div className="flex h-auto w-full flex-col items-start justify-center gap-x-6 p-2 lg:flex-row lg:p-10">
          <div className="flex h-auto w-full flex-col lg:w-[45%]">
            <span className="text-2xl font-bold">Demon Hunter (2022)</span>
            <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Game.demon-hunter.subtitle')}
            </span>

            <Slideshow
              hrefList={[
                {
                  href: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
                  type: 'video',
                  thumbnail:
                    'https://robertmarshall.dev/static/965c61c79da9aefaaf6ed51af84d9340/923ac/testing-images-in-react-with-jest.jpg',
                  alt: 'castle-knight',
                },
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

            <span className="text-xl font-bold">{t('Game.overview')}</span>
            <span className="text-base text-[#595959] dark:text-[#B8B8B8]">
              {t('Home.game.demon-hunter.description')}
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
                Programmer, Project Manager
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.tools')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                Unity C#, PHP, Mysql, A* Pathfinding, Git, Microsoft Teams
              </span>
            </span>
            <span className="text-lg font-bold">
              {t('Game.teamSize')}:{' '}
              <span className="text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                3 (1 Programer, 1 Artist, 1 Game Designer)
              </span>
            </span>
            <span className="mt-6 hidden items-center text-lg font-bold lg:flex">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Demon-Hunter_Unity"
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
                  href="https://github.com/kowitnarong/Demon-Hunter_Unity/releases/download/release-v1_0/release-v1_0.zip"
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
                <li>{t('Game.demon-hunter.programmer.bullet1')}</li>
                <li>{t('Game.demon-hunter.programmer.bullet2')}</li>
                <li>{t('Game.demon-hunter.programmer.bullet3')}</li>
                <li>{t('Game.demon-hunter.programmer.bullet4')}</li>
                <li>{t('Game.demon-hunter.programmer.bullet5')} </li>
              </ul>
            </span>

            <span className="mt-6 text-lg">
              Project Manager
              <ul className="ml-2 list-inside list-disc text-base text-[#595959] dark:text-[#B8B8B8]">
                <li>{t('Game.demon-hunter.project-manager.bullet1')}</li>
                <li>{t('Game.demon-hunter.project-manager.bullet2')}</li>
                <li>{t('Game.demon-hunter.project-manager.bullet3')}</li>
                <li>{t('Game.demon-hunter.project-manager.bullet4')}</li>
                <li>{t('Game.demon-hunter.project-manager.bullet5')}</li>
              </ul>
            </span>

            <span className="mt-6 flex items-center text-lg font-bold lg:hidden">
              Git Repository:
              <span className="ml-2 text-base font-normal text-[#595959] dark:text-[#B8B8B8]">
                <Button
                  as={Link}
                  href="https://github.com/kowitnarong/Demon-Hunter_Unity"
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
                  href="https://github.com/kowitnarong/Demon-Hunter_Unity/releases/download/release-v1_0/release-v1_0.zip"
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
