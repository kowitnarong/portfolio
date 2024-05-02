'use client';

import { UseStoreGlobal } from '@/globals/stores/session/session';
import { Link } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function FooterContainer() {
  const { menuUIIsShow } = UseStoreGlobal(['menuUIIsShow']);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !menuUIIsShow.isShowFooter) return null;

  return (
    <main className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <footer
        style={{
          fontSize: '0.75rem',
        }}
        className="flex flex-col border-t-1 border-gray-300 text-center p-4 justify-center items-center dark:border-gray-700"
      >
        © 2024 Golffy183
        <Link
          className="cursor-pointer text-gray-900 dark:text-gray-100"
          style={{ fontSize: '0.875rem' }}
          aria-current="page"
          href="https://github.com/Golffy183/next-firebase-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository: GitHub
        </Link>
      </footer>
    </main>
  );
}
