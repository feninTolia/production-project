import { classNames } from '@/shared/lib/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'default' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  squared?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  addonRight?: ReactNode;
  addonLeft?: ReactNode;
}

export const Button = memo((props: IButtonProps) => {
  const {
    className,
    children,
    variant = 'clear',
    color = 'default',
    squared = false,
    size = 'm',
    disabled,
    fullWidth,
    addonLeft,
    addonRight,
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
        cls[color],
        cls[size],
      ])}
      disabled={disabled}
      {...buttonProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}

      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  );
});
