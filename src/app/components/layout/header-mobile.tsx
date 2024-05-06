'use client';

import { Link } from '@nextui-org/react';

type HeaderMobileProps = {
  href: string;
  text: string;
  pathname: string;
  theme: string | undefined;
  router: any;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const HeaderMobile = (props: HeaderMobileProps) => {
  return (
    <Link
      className={
        props.href === props.pathname
          ? 'font-bold'
          : 'font-normal' + ' w-full cursor-pointer'
      }
      color={
        props.href === props.pathname
          ? props.theme === 'light'
            ? 'primary'
            : 'warning'
          : 'foreground'
      }
      onPress={() => {
        if (props.href === props.pathname) {
          props.setIsMenuOpen(false);
          return;
        }
        props.router.push(props.href);
        props.setIsMenuOpen(false);
      }}
    >
      {props.text}
    </Link>
  );
};
