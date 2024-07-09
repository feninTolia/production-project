import { HTMLAttributes, PropsWithChildren, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'clear';
export type CardPadding = '0' | '8' | '16' | '24';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
}

const mapPaddingsToClass: Record<CardPadding, string> = {
  0: 'gap_0',
  8: 'gap_8',
  16: 'gap_16',
  24: 'gap_24',
};

export const Card = memo((props: PropsWithChildren<ICardProps>) => {
  const {
    className,
    children,
    variant = 'normal',
    padding = '0',
    max,
    ...otherProps
  } = props;

  const mods: Mods = { [cls.max]: max };
  const paddingClass = mapPaddingsToClass[padding];

  return (
    <div
      className={classNames(cls.Card, mods, [
        className,
        cls[variant],
        cls[paddingClass],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
