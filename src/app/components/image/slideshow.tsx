import Image from 'next/image';
import { useState } from 'react';
import styles from './styles/slideshow.module.css';
import { IoPlay } from 'react-icons/io5';
import ReactPlayer from 'react-player/youtube';

export type SlideshowProps = {
  hrefList: {
    href: string;
    type: 'image' | 'video';
    thumbnail: string | '';
    alt: string;
  }[];
};

export const Slideshow = (props: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="mt-4 flex h-auto w-full max-w-[720px] flex-col items-center justify-center">
      <div
        key={currentIndex}
        className={
          `${styles.fadeIn}` +
          ' flex aspect-video h-auto w-full max-w-[720px] items-center justify-center bg-black'
        }
      >
        {props.hrefList[currentIndex].type === 'image' ? (
          <Image
            draggable={false}
            priority={true}
            src={props.hrefList[currentIndex].href}
            alt={props.hrefList[currentIndex].alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ objectFit: 'contain' }}
            className={`${styles.imageTopContainer}` + ' h-auto w-full select-none'}
            blurDataURL={props.hrefList[currentIndex].href}
          />
        ) : (
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={props.hrefList[currentIndex].href}
          />
        )}
      </div>
      <div
        className={
          `${styles.customScrollbar}` +
          ' flex h-auto w-full flex-row items-center justify-start gap-x-2 overflow-x-scroll py-2 shadow-lg'
        }
      >
        {props.hrefList.map((href, index) => {
          if (href.type === 'image') {
            return (
              <div
                className={
                  `${currentIndex === index ? 'border-2 border-[#006FEE] dark:border-[#EAB308]' : 'opacity-50'}` +
                  ' flex aspect-video flex-none select-none items-center justify-center bg-black'
                }
                key={index}
              >
                <Image
                  draggable={false}
                  priority={currentIndex === index}
                  className="h-auto w-[110px] cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                  width="0"
                  height="0"
                  src={href.href}
                  alt={href.alt}
                  blurDataURL={href.href}
                />
              </div>
            );
          } else {
            return (
              <div
                className={
                  `${currentIndex === index ? 'border-2 border-[#006FEE] dark:border-[#EAB308]' : 'opacity-50'}` +
                  ' relative flex aspect-video flex-none select-none items-center justify-center bg-black'
                }
                key={index}
              >
                <div
                  onClick={() => setCurrentIndex(index)}
                  className="top-50 bottom-50 absolute cursor-pointer"
                >
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-2 pl-2.5 text-slate-600 dark:bg-slate-900 dark:text-gray-300">
                    <IoPlay size={18} />
                  </div>
                </div>
                <Image
                  draggable={false}
                  priority={currentIndex === index}
                  onClick={() => setCurrentIndex(index)}
                  className="h-auto w-[110px] cursor-pointer"
                  width="0"
                  height="0"
                  src={href.thumbnail}
                  alt={href.alt}
                  blurDataURL={href.thumbnail}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
