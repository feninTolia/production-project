import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticlesCreate } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const user = useSelector(getUserAuthData);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  if (user) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap="32">
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.Navbar, {}, [className])}>
            <HStack gap="32">
              <AppLink
                to={getRouteArticlesCreate()}
                theme={AppLinkTheme.INVERTED}
              >
                {t('Create New Article')}
              </AppLink>

              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
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
    </header>
  );
});
