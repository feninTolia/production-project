import { FC, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Avatar.module.scss';

interface IAvatarProps {
  className?: string;
  alt: string;
  src: string;
  size?: string;
}

const placeholderImg =
  '/src/shared/assets/female-avatar-girl-face-woman-user-9.svg';

export const Avatar: FC<IAvatarProps> = (props) => {
  const { className, src = '', alt, size = '100px' } = props;
  const [imgSrc, setImgSrc] = useState(src);

  const style: React.CSSProperties = useMemo(() => {
    return { width: size, height: size };
  }, [size]);
  console.log(src);

  return (
    <img
      src={imgSrc}
      onError={() => setImgSrc(placeholderImg)}
      alt={alt}
      style={style}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};
