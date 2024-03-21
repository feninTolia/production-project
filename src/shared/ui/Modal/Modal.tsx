import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 150;

export const Modal: FC<IModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { t } = useTranslation();

  const handleClose = useCallback(() => {
    if (onClose != null) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.stopPropagation();
  };

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

  return (
    <Portal>
      <div
        className={classNames(
          cls.Modal,
          { [cls.opened]: isOpen, [cls.isClosing]: isClosing },
          [className]
        )}
      >
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={onContentClick}>
            {t('Modal')}
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
