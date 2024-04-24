import { HTMLAttributes, PropsWithChildren, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card = memo((props: PropsWithChildren<ICardProps>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
});
