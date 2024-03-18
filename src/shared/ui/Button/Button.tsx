import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, children, theme, ...buttonProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
