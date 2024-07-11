import { HTMLAttributes, PropsWithChildren, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'primary' | 'outlined' | 'clear' | 'light';
export type CardPadding = '0' | '8' | '12' | '16' | '24';
export type CardBorder = 'normal' | 'rounded';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

const mapPaddingsToClass: Record<CardPadding, string> = {
  0: 'gap_0',
  8: 'gap_8',
  12: 'gap_12',
  16: 'gap_16',
  24: 'gap_24',
};

export const Card = memo((props: PropsWithChildren<ICardProps>) => {
  const {
    className,
    children,
    variant = 'primary',
    border = 'normal',
    padding = '8',
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
        cls[border],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
