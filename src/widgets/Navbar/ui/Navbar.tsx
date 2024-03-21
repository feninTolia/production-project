import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        onClick={onToggleAuthModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleAuthModal}>
        Lorem ipsum dolor sit consectetur, provident e libero quia o. Lorem
        ipsum dolor sit consectetur, provident e libero quia o. Lorem ipsum
        dolor sit consectetur, provident e libero quia o. Lorem ipsum dolor sit
        consectetur, provident e libero quia o.
      </Modal>
    </div>
  );
};
