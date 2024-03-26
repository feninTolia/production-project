import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = '',
  ERROR = 'error',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<ITextProps> = (props) => {
  const {
    className,
    title,
    text: description,
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {description && <p className={cls.description}>{description}</p>}
    </div>
  );
};
