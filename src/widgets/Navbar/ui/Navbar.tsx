import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const user = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text title="LOGO" theme={TextTheme.INVERTED} />
      {!user && (
        <>
          <Button
            className={cls.links}
            onClick={onOpenAuthModal}
            theme={ButtonTheme.CLEAR_INVERTED}
          >
            {t('Login')}
          </Button>
          {isAuthModal && (
            <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
          )}
        </>
      )}
      {user && (
        <div className={cls.links}>
          <AppLink to={RoutePath.article_create} theme={AppLinkTheme.INVERTED}>
            {t('Create New Article')}
          </AppLink>

          <Dropdown
            direction="bottomLeft"
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
                      href: RoutePath.admin_panel,
                    },
                  ]
                : []),
              {
                content: t('Profile'),
                href: RoutePath.profile + user.id,
              },
              {
                content: t('Logout'),
                onClick: onLogout,
              },
            ]}
          />
        </div>
      )}
    </header>
  );
});
