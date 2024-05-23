import { useState, useRef, useCallback, useEffect } from 'react';

interface IUseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  animationDelay?: number;
}

export function useModal(props: IUseModalProps) {
  const { isOpen, onClose, animationDelay = 300 } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose != null) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onEscapeClick = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
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

  return { isClosing, isMounted, close };
}
