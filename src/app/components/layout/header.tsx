import { Link } from '@nextui-org/react';

type HeaderProps = {
  navigationPathname: string;
  headerText: string;
  pathname: string;
  theme: string | undefined;
  router: any;
};

export const Header = (props: HeaderProps) => {
  return (
    <Link
      className="cursor-pointer"
      color={
        props.pathname === props.navigationPathname
          ? props.theme === 'light'
            ? 'primary'
            : 'warning'
          : 'foreground'
      }
      style={{ fontSize: 'min(max(0.75rem, 0.8vw), 1rem)' }}
      aria-current="page"
      onPress={() => {
        if (props.pathname === props.navigationPathname) return;
        props.router.push(props.navigationPathname);
      }}
    >
      {props.headerText}
    </Link>
  );
};
