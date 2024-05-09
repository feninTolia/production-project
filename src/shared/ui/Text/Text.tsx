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
  S = 'size_s',
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
type HeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};
export const Text = memo((props: ITextProps) => {
  const {
    className,
    title,
    text: description,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;
  const HeaderTag = mapSizeToHeaderTag[size];
  return (
    <div
      className={classNames(cls.Text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size],
      ])}
    >
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {description && <p className={cls.description}>{description}</p>}
    </div>
  );
});
