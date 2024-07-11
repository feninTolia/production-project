import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  squared?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button = memo((props: IButtonProps) => {
  const {
    className,
    children,
    variant = 'clear',
    squared = false,
    size = 'm',
    disabled,
    fullWidth,
    ...buttonProps
  } = props;

  const mods = {
    [cls.squared]: squared,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
      ])}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
});
