import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

/**
 * Is obsolete, use new redesigned components.
 * @deprecated
 * */

export const Input: FC<IInputProps> = memo((props: IInputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    autoFocus,
    readonly,
    ...other
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [trolleyPosition, setTrolleyPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setTrolleyPosition(e.target.value.length);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = () => {
    setIsFocused(false);
  };
  const onSelect = (e: any) => {
    setTrolleyPosition((e?.target?.selectionStart || 0) as number);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };
  const isTrolleyVisible = isFocused && !readonly;
  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{placeholder + '>'}</div>
      )}
      <div className={cls.trolleyWrapper}>
        <input
          ref={ref}
          className={cls.input}
          type={type}
          {...other}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
        />
        {isTrolleyVisible && (
          <span className={cls.trolley} style={{ left: trolleyPosition * 9 }} />
        )}
      </div>
    </div>
  );
});
