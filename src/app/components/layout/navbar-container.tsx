'use client';

import { useTranslations } from 'next-intl';

import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { ThemeSwitcher } from '../theme/theme-swithcer';
import LanguageSwitcher from '../language/language-swithcer';
import { usePathname, useRouter } from '@/core/navigation/navigation';
import { useEffect, useMemo, useState } from 'react';
import { UseStoreGlobal } from '@/globals/stores/session/session';
import { useNavigateLoader } from '../../hooks/navigate-loader';
import { useTheme } from 'next-themes';

export default function NavbarContainer() {
  const { menuUIIsShow } = UseStoreGlobal(['menuUIIsShow']);

  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useTheme();

  const menuItems = useMemo(
    () => [
      { href: `/`, text: t('Navbar.header.home') },
      { href: `/work`, text: t('Navbar.header.work') },
      { href: `/about`, text: t('Navbar.header.about') },
    ],
    [t],
  );

  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !menuUIIsShow.isShowHeader) return null;

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation={false}
      className="bg-white dark:bg-slate-950"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <li className="flex h-full w-full justify-start items-center">
          <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
        </li>
      </NavbarContent>

      <NavbarContent className="w-full sm:hidden" justify="center">
        <li className="flex font-bold h-full text-black ml-2 w-full justify-start items-center dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          Portfolio
        </li>
      </NavbarContent>

      <NavbarContent className="gap-8 hidden items-center sm:flex" justify="center">
        <li className="border-black flex border-r-2 pr-8 items-center justify-start dark:border-white">
          <p className="font-bold text-black ml-2 dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
            Portfolio
          </p>
        </li>
        <NavbarItem>
          <Link
            className="cursor-pointer"
            color={
              pathname === '/'
                ? theme === 'light'
                  ? 'primary'
                  : 'warning'
                : 'foreground'
            }
            style={{ fontSize: 'min(max(0.75rem, 0.8vw), 1rem)' }}
            aria-current="page"
            onPress={() => {
              if (pathname === '/') return;
              router.push('/');
            }}
          >
            {t('Navbar.header.home')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="cursor-pointer"
            color={
              pathname === '/work'
                ? theme === 'light'
                  ? 'primary'
                  : 'warning'
                : 'foreground'
            }
            style={{ fontSize: 'min(max(0.75rem, 0.8vw), 1rem)' }}
            aria-current="page"
            onPress={() => {
              if (pathname === '/work') return;
              router.push('/work');
            }}
          >
            {t('Navbar.header.work')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="cursor-pointer"
            color={
              pathname === '/about'
                ? theme === 'light'
                  ? 'primary'
                  : 'warning'
                : 'foreground'
            }
            style={{ fontSize: 'min(max(0.75rem, 0.8vw), 1rem)' }}
            aria-current="page"
            onPress={() => {
              if (pathname === '/about') return;
              router.push('/about');
            }}
          >
            {t('Navbar.header.about')}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <li className="hidden sm:flex sm:space-x-2 sm:items-center sm:justify-center">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </li>
        <li className="flex space-x-1 items-center justify-end sm:hidden">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </li>
      </NavbarContent>

      <NavbarMenu className="dark:bg-slate-900">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={
                item.href === pathname
                  ? 'font-bold'
                  : 'font-normal' + ' w-full cursor-pointer'
              }
              color={
                item.href === pathname
                  ? theme === 'light'
                    ? 'primary'
                    : 'warning'
                  : 'foreground'
              }
              onPress={() => {
                if (item.href === pathname) {
                  setIsMenuOpen(false);
                  return;
                }
                router.push(item.href);
                setIsMenuOpen(false);
              }}
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
