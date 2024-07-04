import { HTMLAttributes, PropsWithChildren, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: CardTheme;
  max?: boolean;
}

/**
 * Is obsolete, use new redesigned components.
 * @deprecated
 * */

export const Card = memo((props: PropsWithChildren<ICardProps>) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  } = props;

  const mods: Mods = { [cls.max]: max };

  return (
    <div
      className={classNames(cls.Card, mods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
