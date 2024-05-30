'use client';

import { GetMethodStoreGlobal } from '@/globals/stores/session/session';
import { useCallback, useEffect } from 'react';

export const useMobile = () => {
  const { setIsMobile } = GetMethodStoreGlobal();

  const handleResize = useCallback(() => setIsMobile(isMobile()), [setIsMobile]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
};

const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isAndroid = /android/i.test(userAgent);
  const isIos = /iphone|ipad|ipod/i.test(userAgent);

  return isAndroid || isIos;
};
