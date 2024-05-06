import React, { useState } from 'react';
import styles from './styles/image-overlay.module.css';
import Image from 'next/image';

type ImageOverlayProps = {
  src: string;
  alt: string;
  textTitle: string;
  textDescription: string;
  className?: string;
};

export const ImageOverlay = (props: ImageOverlayProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.container} ${props.className}` + ' shadow-md'}
    >
      {isHovered && (
        <div className={styles.text + ' rounded-b-xl'}>
          <p className={styles.title}>{props.textTitle}</p>
          <p className={styles.description}>{props.textDescription}</p>
        </div>
      )}
      <Image
        src={props.src}
        alt={props.alt}
        fill
        priority
        className={`${styles.image}`}
      />
    </div>
  );
};
