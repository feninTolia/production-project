import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
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
        <HStack gap="32">
          <AppLink to={RoutePath.article_create} theme={AppLinkTheme.INVERTED}>
            {t('Create New Article')}
          </AppLink>

          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      )}
    </header>
  );
});
