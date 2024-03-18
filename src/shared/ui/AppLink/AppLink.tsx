import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
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

export const AppLink: FC<IAppLinkProps> = (props) => {
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
      className={classNames('', {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
