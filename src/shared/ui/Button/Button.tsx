import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  DEFAULT = '',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINED = 'outlined',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  squared?: boolean;
  size?: ButtonSize;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    squared = false,
    size = ButtonSize.M,
    ...buttonProps
  } = props;

  const mods = {
    [cls.squared]: squared,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
