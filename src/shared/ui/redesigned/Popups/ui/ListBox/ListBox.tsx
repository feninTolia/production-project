import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface ILIstBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface IListBoxProps<T extends string> {
  items: Array<ILIstBoxItem<T>>;
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  label?: string;
  disabled?: boolean;
  direction?: DropdownDirection;
}

export function ListBox<T extends string>(props: IListBoxProps<T>) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    label,
    disabled,
    direction = 'bottomRight',
  } = props;

  const selectedValue = useMemo(() => {
    return items?.find((item) => item.value === value);
  }, [items, value]);

  return (
    <HStack
      gap="4"
      className={classNames('', { [cls.disabled]: disabled }, [])}
    >
      {label && <span>{label + '>'}</span>}

      <HListBox
        as={'div'}
        className={classNames(popupCls.popup, {}, [className])}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      >
        <HListBox.Button as="div" className={popupCls.trigger}>
          <Button variant="filled" disabled={disabled}>
            {selectedValue?.content ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, [
            popupCls[direction],
            popupCls.menu,
          ])}
        >
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.option,
                    {
                      [popupCls.active]: active,
                      [popupCls.selected]: selected,
                      [popupCls.disabled]: item.disabled,
                    },
                    []
                  )}
                >
                  {selected && ' '}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
