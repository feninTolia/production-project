import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { getRouteAdmin, getRouteProfile } from '@/shared/constants/router';
import cls from './AvatarDropdown.module.scss';

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

  return (
    <Dropdown
      direction="bottomLeft"
      className={className}
      trigger={
        <Avatar
          src={user.avatar ?? ''}
          alt="avatar"
          size="30px"
          className={cls.avatar}
        />
      }
      items={[
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
          content: t('Logout'),
          onClick: onLogout,
        },
      ]}
    />
  );
});
