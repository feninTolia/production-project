import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} theme={AppLinkTheme.INVERTED}>
          Main page
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.INVERTED}>
          About page
        </AppLink>
      </div>
    </div>
  );
};
