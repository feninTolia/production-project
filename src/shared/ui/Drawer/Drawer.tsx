import { ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';
import { useModal } from 'shared/lib/hooks/useModal';

interface IDrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: IDrawerProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { close, isClosing, isMounted } = useModal({
    animationDelay: 250,
    onClose,
    isOpen,
  });

  const mods: Mods = { [cls.opened]: isOpen, [cls.isClosing]: isClosing };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
