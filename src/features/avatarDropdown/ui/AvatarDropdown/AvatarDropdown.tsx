import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import {
  getRouteAdmin,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/constants/router';
import cls from './AvatarDropdown.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface IAvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: IAvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const user = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!user) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Admin'),
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      content: t('Profile'),
      href: getRouteProfile(user.id),
    },
    {
      content: t('Settings'),
      href: getRouteSettings(),
    },
    {
      content: t('Logout'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Dropdown
          direction="bottomLeft"
          className={className}
          trigger={
            <Avatar
              src={user.avatar ?? ''}
              alt="avatar"
              size="40px"
              className={cls.avatar}
            />
          }
          items={items}
        />
      }
      off={
        <DropdownDeprecated
          direction="bottomLeft"
          className={className}
          trigger={
            <AvatarDeprecated
              src={user.avatar ?? ''}
              alt="avatar"
              size="30px"
              className={cls.avatar}
            />
          }
          items={items}
        />
      }
    />
  );
});
