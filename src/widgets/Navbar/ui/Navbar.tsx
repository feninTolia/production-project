import { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';
import { Avatar } from 'shared/ui/Avatar/Avatar';

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
    <div className={classNames(cls.Navbar, {}, [className])}>
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
        <>
          <Button
            className={cls.links}
            onClick={onLogout}
            theme={ButtonTheme.CLEAR_INVERTED}
          >
            {t('Logout')}
          </Button>
          <Avatar
            src={user.avatar ?? ''}
            alt="avatar"
            size="30px"
            className={cls.avatar}
          />
        </>
      )}
    </div>
  );
});
