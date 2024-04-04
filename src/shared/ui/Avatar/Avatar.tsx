import { FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Avatar.module.scss';

interface IAvatarProps {
  className?: string;
  alt: string;
  src: string;
  size?: string;
}

export const Avatar: FC<IAvatarProps> = (props) => {
  const { className, src, alt, size = '100px' } = props;

  const style: React.CSSProperties = useMemo(() => {
    return { width: size, height: size };
  }, [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};
