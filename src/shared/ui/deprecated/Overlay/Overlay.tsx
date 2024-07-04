import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Overlay.module.scss';

interface IOverlayProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Is obsolete, use new redesigned components.
 * @deprecated
 * */

export const Overlay = memo((props: IOverlayProps) => {
  const { className, onClick } = props;

  return (
    <div
      className={classNames(cls.Overlay, {}, [className])}
      onClick={onClick}
    />
  );
});
