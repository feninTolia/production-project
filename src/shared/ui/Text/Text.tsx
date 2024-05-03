import { classNames } from 'shared/lib/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
  PRIMARY = '',
  INVERTED = 'inverted',
  ERROR = 'error',
}
export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left',
}
export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: ITextProps) => {
  const {
    className,
    title,
    text: description,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  return (
    <div
      className={classNames(cls.Text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {description && <p className={cls.description}>{description}</p>}
    </div>
  );
});
