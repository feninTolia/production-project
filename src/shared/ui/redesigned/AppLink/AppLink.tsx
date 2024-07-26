import { classNames } from '@/shared/lib/classNames';
import { LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { ForwardedRef, forwardRef } from 'react';

export type AppLinkVariant = 'primary' | 'red';

interface IAppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  activeClassName?: string;
}

export const AppLink = forwardRef(
  (props: IAppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
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
        ref={ref}
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
  }
);
