import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const Skeleton = memo((props: ISkeletonProps) => {
  const { className, width, height, borderRadius } = props;
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };
  return (
    <div
      style={style}
      className={classNames(cls.Skeleton, {}, [className])}
    ></div>
  );
});
