import { useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Select.module.scss';

export interface ISelectOption<T extends string> {
  value: T;
  content: string;
}

interface ISelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: Array<ISelectOption<T>>;
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
  const { className, label, options, onChange, readonly, value } = props;
  const mods = { [cls.readonly]: readonly };

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    },
    [onChange]
  );

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <div className={cls.label}>{label + '>'}</div>}
      <select
        className={cls.select}
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};
