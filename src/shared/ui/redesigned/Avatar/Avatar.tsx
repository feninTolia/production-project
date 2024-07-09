import Fallback from '@/shared/assets/female-avatar-girl-face-woman-user-9.svg';
import { classNames } from '@/shared/lib/classNames';
import { FC, useMemo } from 'react';
import { AppImage } from '../../redesigned/AppImage';
import cls from './Avatar.module.scss';
import { Skeleton } from '../Skeleton';

interface IAvatarProps {
  className?: string;
  alt: string;
  src: string;
  size?: string;
}

export const Avatar: FC<IAvatarProps> = (props) => {
  const { className, src = '', alt, size = '100px' } = props;

  const style: React.CSSProperties = useMemo(() => {
    return { width: size, height: size };
  }, [size]);

  return (
    <AppImage
      fallback={<Skeleton width={size} height={size} borderRadius="100%" />}
      errorFallback={<Fallback width={size} height={size} />}
      src={src}
      alt={alt}
      style={style}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};
