import Image from 'next/image';
import { useState } from 'react';
import styles from './styles/slideshow.module.css';
import { IoPlay } from 'react-icons/io5';
import ReactPlayer from 'react-player';

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
    <div className="my-4 flex h-auto w-full max-w-[720px] flex-col items-center justify-center">
      <div
        key={currentIndex}
        className={
          `${styles.fadeIn}` +
          ' flex aspect-video h-auto w-full max-w-[720px] items-center justify-center bg-black'
        }
      >
        {props.hrefList[currentIndex].type === 'image' ? (
          <Image
            priority
            src={props.hrefList[currentIndex].href}
            alt={props.hrefList[currentIndex].alt}
            width={0}
            height={0}
            sizes="100vw"
            className={`${styles.imageTopContainer}`}
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
                  ' flex aspect-video flex-none items-center justify-center bg-black'
                }
                key={index}
              >
                <Image
                  priority
                  className="cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                  width={110}
                  height={110}
                  src={href.href}
                  alt={href.alt}
                />
              </div>
            );
          } else {
            return (
              <div
                className={
                  `${currentIndex === index ? 'border-2 border-[#006FEE] dark:border-[#EAB308]' : 'opacity-50'}` +
                  ' relative flex aspect-video flex-none items-center justify-center bg-black'
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
                  priority
                  onClick={() => setCurrentIndex(index)}
                  className="cursor-pointer"
                  width={110}
                  height={110}
                  src={href.thumbnail}
                  alt={href.alt}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
