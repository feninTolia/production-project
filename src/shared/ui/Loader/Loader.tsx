import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = (props) => {
  const { className } = props;

  return <div className={classNames(cls.loader, {}, [className])}></div>;
};
