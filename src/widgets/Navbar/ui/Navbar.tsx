import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} theme={AppLinkTheme.INVERTED}>
          {t('Main page')}
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.INVERTED}>
          {t('About page')}
        </AppLink>
      </div>
    </div>
  );
};
