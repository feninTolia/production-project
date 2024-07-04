import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/deprecated/Loader';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
