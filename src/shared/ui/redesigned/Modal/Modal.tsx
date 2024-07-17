import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import { Portal } from '../../redesigned/Portal/Portal';
import cls from './Modal.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { toggleFeatures } from '@/shared/lib/features';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
  children: ReactNode;
}

const ANIMATION_DELAY = 150;

export const Modal = (props: IModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });
  const { theme } = useTheme();

  const mods: Mods = { [cls.opened]: isOpen, [cls.isClosing]: isClosing };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(cls.Modal, mods, [
          className,
          theme,
          toggleFeatures({
            name: 'isAppRedesigned',
            on: () => cls.modalNew,
            off: () => cls.modalOld,
          }),
        ])}
      >
        <Overlay className={cls.overlay} onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
