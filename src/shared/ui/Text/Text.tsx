import { classNames } from 'shared/lib/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextTheme {
  PRIMARY = '',
  ERROR = 'error',
}
export enum TextAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: ITextProps) => {
  const {
    className,
    title,
    text: description,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div
      className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {description && <p className={cls.description}>{description}</p>}
    </div>
  );
});
