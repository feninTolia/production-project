import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
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
          <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
        </>
      )}
      {user && (
        <Button
          className={cls.links}
          onClick={onLogout}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Logout')}
        </Button>
      )}
    </div>
  );
};
