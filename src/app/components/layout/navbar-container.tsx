'use client';

import { useTranslations } from 'next-intl';

import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { ThemeSwitcher } from '../theme/theme-swithcer';
import LanguageSwitcher from '../language/language-swithcer';
import { usePathname, useRouter } from '@/core/navigation/navigation';
import { useEffect, useState } from 'react';
import { UseStoreGlobal } from '@/globals/stores/session/session';
import { useTheme } from 'next-themes';
import { Header } from './header';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HeaderMobile } from './header-mobile';

export default function NavbarContainer() {
  const { menuUIIsShow } = UseStoreGlobal(['menuUIIsShow']);

  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useTheme();

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
          <Header
            headerText={t('Navbar.header.home')}
            navigationPathname="/"
            pathname={pathname}
            theme={theme}
            router={router}
          />
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                style={{ fontSize: 'min(max(0.75rem, 1.1vw), 1rem)' }}
                disableRipple
                className="p-0 -mr-2 gap-1 flex items-center bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                {pathname.includes('/work') ? (
                  <span
                    className={theme === 'light' ? 'text-[#0070f0]' : 'text-[#f5a524]'}
                  >
                    {t('Navbar.header.work')}
                  </span>
                ) : (
                  t('Navbar.header.work')
                )}
                <RiArrowDropDownLine className="mt-0.5" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Work"
              className="w-[200px] bg-white dark:bg-slate-950"
              itemClasses={{
                base: 'gap-4',
              }}
            >
              <DropdownItem
                aria-label="Web Development"
                key="web_development"
                onPress={() => {
                  if (pathname === '/work/web-development') return;
                  router.push('/work/web-development');
                }}
              >
                <div className="w-full flex justify-between items-center">
                  <span>Web Development</span>
                  <span className="pb-0.5">→</span>
                </div>
              </DropdownItem>
              <DropdownItem
                aria-label="Game Development"
                key="game_development"
                onPress={() => {
                  if (pathname === '/work/game-development') return;
                  router.push('/work/game-development');
                }}
              >
                <div className="w-full flex justify-between items-center">
                  <span>Game Development</span>
                  <span className="pb-0.5">→</span>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Header
            headerText={t('Navbar.header.about')}
            navigationPathname="/about"
            pathname={pathname}
            theme={theme}
            router={router}
          />
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
        <NavbarMenuItem>
          <HeaderMobile
            href="/"
            text={t('Navbar.header.home')}
            pathname={pathname}
            theme={theme}
            router={router}
            setIsMenuOpen={(isMenuOpen) => setIsMenuOpen(isMenuOpen)}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <HeaderMobile
            href="/work"
            text={t('Navbar.header.work')}
            pathname={pathname}
            theme={theme}
            router={router}
            setIsMenuOpen={(isMenuOpen) => setIsMenuOpen(isMenuOpen)}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <HeaderMobile
            href="/about"
            text={t('Navbar.header.about')}
            pathname={pathname}
            theme={theme}
            router={router}
            setIsMenuOpen={(isMenuOpen) => setIsMenuOpen(isMenuOpen)}
          />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
