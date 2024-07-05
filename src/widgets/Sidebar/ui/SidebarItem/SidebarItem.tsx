import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ISidebarItem } from '../../model/types';
import cls from './SidebarItem.module.scss';

interface ISidebarItemProps extends ISidebarItem {
  collapsed: boolean;
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
  const { text: title, path, collapsed, authOnly } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && authOnly) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          activeClassName={cls.isActive}
          to={path}
          className={classNames(cls.linkRedesigned, {
            [cls.collapsedRedesigned]: collapsed,
          })}
        >
          <Icon clickable Svg={props.Icon} onClick={() => {}} />
          <span> {t(title)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          to={path}
          theme={AppLinkTheme.INVERTED}
          className={classNames(cls.link, { [cls.collapsed]: collapsed })}
        >
          <props.Icon className={cls.icon} />
          <span> {t(title)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});
