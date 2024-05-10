import { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const user = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

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
