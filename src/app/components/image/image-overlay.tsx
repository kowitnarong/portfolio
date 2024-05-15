'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/image-overlay.module.css';
import Image from 'next/image';
import { useRouter } from '@/core/navigation/navigation';
import { UseStoreGlobal } from '@/globals/stores/session/session';
import { Button } from '@nextui-org/react';

type ImageOverlayProps = {
  href?: string | undefined;
  src: string;
  alt: string;
  textTitle: string;
  textDescription: string;
  className?: string;
};

export const ImageOverlay = (props: ImageOverlayProps) => {
  const { isMobile } = UseStoreGlobal(['isMobile']);
  const [isHidden, setIsHidden] = useState(true);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      onClick={() => {
        !isMobile && props.href !== undefined && router.push(props.href);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHidden(false);
      }}
      className={
        `${styles.container} ${props.className} ${props.href !== undefined ? 'cursor-pointer' : ''}` +
        ' shadow-md'
      }
    >
      {isHovered ? (
        <div className={styles.text + ' rounded-b-xl'}>
          <p className={styles.title}>{props.textTitle}</p>
          <p className={styles.description}>{props.textDescription}</p>
          <div
            className={
              `${isMobile && props.href !== undefined ? 'flex' : 'hidden'}` +
              ' w-full items-center justify-end'
            }
          >
            <Button
              size="sm"
              color="primary"
              onPress={() => {
                props.href !== undefined && router.push(props.href);
              }}
            >
              More
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.textNoAnimation + ' rounded-b-xl'}>
          <p className={styles.title}>{props.textTitle}</p>
        </div>
      )}
      <Image
        src={props.src}
        alt={props.alt}
        fill
        draggable={false}
        priority
        className={
          'select-none ' +
          `${styles.image} ${isHidden ? (isHovered ? styles.hover : '') : isHovered ? styles.hover : styles.noHover}`
        }
      />
    </div>
  );
};
