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
import { Accordion } from './accordion';

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

  function renderHeader(headerText: string | any, navigationPathname: string) {
    return (
      <Header
        headerText={headerText}
        navigationPathname={navigationPathname}
        pathname={pathname}
        theme={theme}
        router={router}
      />
    );
  }

  function renderMobileHeader(headerText: string, href: string) {
    return (
      <HeaderMobile
        href={href}
        text={headerText}
        pathname={pathname}
        theme={theme}
        router={router}
        setIsMenuOpen={(isMenuOpen) => setIsMenuOpen(isMenuOpen)}
      />
    );
  }

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation={false}
      className="bg-white dark:bg-slate-950"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      <NavbarContent className="w-full sm:hidden" justify="center">
        <li className="ml-2 font-bold text-black dark:text-white dark:drop-shadow-[0_0_0.3rem_#00000070]">
          <h1>Portfolio</h1>
        </li>
      </NavbarContent>

      <NavbarContent className="hidden items-center gap-8 sm:flex" justify="center">
        <li className="flex items-center justify-start border-r-2 border-black pr-8 font-bold dark:border-white">
          Portfolio
        </li>
        <NavbarItem>{renderHeader(t('Navbar.header.home'), '/')}</NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <button
                style={{ fontSize: 'min(max(0.75rem, 1.1vw), 1rem)' }}
                className="-mr-2 mt-0.5 flex w-auto items-center gap-1 bg-transparent data-[hover=true]:bg-transparent"
              >
                {pathname.includes('/work') ? (
                  <span
                    className={
                      `${theme === 'light' ? 'text-[#0070f0]' : 'text-[#f5a524]'}` +
                      ' font-bold'
                    }
                  >
                    {t('Navbar.header.work.title')}
                  </span>
                ) : (
                  t('Navbar.header.work.title')
                )}
                <RiArrowDropDownLine className="mt-0.5" />
              </button>
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
                <li>
                  <div className="flex w-full items-center justify-between">
                    <span>{t('Navbar.header.work.web')}</span>
                    <span className="pb-0.5">→</span>
                  </div>
                </li>
              </DropdownItem>
              <DropdownItem
                aria-label="Game Development"
                key="game_development"
                onPress={() => {
                  if (pathname === '/work/game-development') return;
                  router.push('/work/game-development');
                }}
              >
                <li>
                  <div className="flex w-full items-center justify-between">
                    <span>{t('Navbar.header.work.game')}</span>
                    <span className="pb-0.5">→</span>
                  </div>
                </li>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>{renderHeader(t('Navbar.header.resume'), '/resume')}</NavbarItem>
        <NavbarItem>{renderHeader(t('Navbar.header.about'), '/about')}</NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <li className="hidden sm:flex sm:items-center sm:justify-center sm:space-x-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </li>
        <li className="flex items-center justify-end space-x-1 sm:hidden">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </li>
      </NavbarContent>

      <NavbarMenu className="dark:bg-slate-900">
        <NavbarMenuItem>
          {renderMobileHeader(t('Navbar.header.home'), '/')}
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Accordion
            href="/work"
            pathname={pathname}
            router={router}
            theme={theme}
            className="-mr-2 flex items-center gap-1 bg-transparent p-0 text-base data-[hover=true]:bg-transparent"
            title={t('Navbar.header.work.title')}
            content={
              <ul className="my-1 ml-4 flex w-full flex-col items-start justify-center gap-y-1">
                <li>
                  {renderMobileHeader(
                    t('Navbar.header.work.web'),
                    '/work/web-development',
                  )}
                </li>
                <li>
                  {renderMobileHeader(
                    t('Navbar.header.work.game'),
                    '/work/game-development',
                  )}
                </li>
              </ul>
            }
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          {renderMobileHeader(t('Navbar.header.resume'), '/resume')}
        </NavbarMenuItem>
        <NavbarMenuItem>
          {renderMobileHeader(t('Navbar.header.about'), '/about')}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
