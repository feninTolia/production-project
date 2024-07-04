import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

/**
 * Is obsolete, use new redesigned components.
 * @deprecated
 * */

export const AppLink = memo((props: IAppLinkProps) => {
  const {
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    to,
    ...linkProps
  } = props;

  return (
    <Link
      {...linkProps}
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
});
