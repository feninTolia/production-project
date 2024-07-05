import { classNames } from '@/shared/lib/classNames';
import { memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface IAppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  activeClassName?: string;
}

export const AppLink = memo((props: IAppLinkProps) => {
  const {
    className,
    children,
    variant = 'primary',
    activeClassName = '',
    to,
    ...linkProps
  } = props;

  return (
    <NavLink
      {...linkProps}
      to={to}
      className={({ isActive }) =>
        classNames(cls.appLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
    >
      {children}
    </NavLink>
  );
});
