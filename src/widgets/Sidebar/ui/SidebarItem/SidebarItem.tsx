import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames';
import cls from './SidebarItem.module.scss';
import { ISidebarItem } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

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
