'use client';

import { UseStoreGlobal } from '@/globals/stores/session/session';
import styles from './styles/ui-loader.module.css';
import { Puff } from 'react-loader-spinner';
import { ScrollToTop } from '../layout/scroll-to-top';

export default function UILoader({ children }: { children: React.ReactNode }) {
  const { isLoading } = UseStoreGlobal(['isLoading']);

  return isLoading ? (
    <>
      {children}

      <div
        className={
          isLoading &&
          styles.loaderOverlay +
            ' flex items-center justify-center bg-gray-50 dark:bg-gray-800'
        }
      >
        <Puff
          visible={true}
          height="120"
          width="120"
          color="#1e293b"
          ariaLabel="puff-loading"
          wrapperClass="dark:invert dark:drop-shadow-[0_0_0.3rem_#00000070]"
        />
      </div>
    </>
  ) : (
    <>
      {children}
      <ScrollToTop />
    </>
  );
}
