import { getUserAuthData } from '@/entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { ISidebarItem } from '../../model/types';
import cls from './SidebarItem.module.scss';

interface ISidebarItemProps extends ISidebarItem {
  collapsed: boolean;
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
  const { text: title, path, Icon, collapsed, authOnly } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && authOnly) {
    return null;
  }

  return (
    <AppLink
      to={path}
      theme={AppLinkTheme.INVERTED}
      className={classNames(cls.link, { [cls.collapsed]: collapsed })}
    >
      <Icon />
      <span> {t(title)}</span>
    </AppLink>
  );
});
