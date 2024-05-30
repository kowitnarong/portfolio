'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import styles from './styles/scroll-to-top.module.css';

export const ScrollToTop = () => {
  const isBrowser = () => typeof window !== 'undefined';
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll To Top"
      className={
        `${styles.button} ${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}` +
        ' bg-[#006FEE] shadow-md dark:bg-[#EAB308]'
      }
      onClick={scrollToTop}
    >
      <IoIosArrowRoundUp className="inline-block h-6 w-6 text-white" />
    </button>
  );
};
