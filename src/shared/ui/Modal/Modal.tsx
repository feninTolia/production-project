import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

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

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClose = useCallback(() => {
    if (onClose != null) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onEscapeClick = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onEscapeClick);
    }
    return () => {
      if (timerRef.current != null) {
        clearTimeout(timerRef.current);
      }

      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [isOpen, onEscapeClick]);

  if (lazy && !isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(
          cls.Modal,
          { [cls.opened]: isOpen, [cls.isClosing]: isClosing },
          [className]
        )}
      >
        <Overlay className={cls.overlay} onClick={handleClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
