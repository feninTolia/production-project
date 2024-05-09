import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

export interface ILIstBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface IListBoxProps {
  items: ILIstBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
  direction?: DropdownDirection;
}

export function ListBox(props: IListBoxProps) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    label,
    disabled,
    direction = 'bottom',
  } = props;

  return (
    <HStack
      gap="4"
      className={classNames('', { [cls.disabled]: disabled }, [cls[direction]])}
    >
      {label && <span>{label + '>'}</span>}

      <HListBox
        as={'div'}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      >
        <HListBox.Button className={cls.trigger}>
          <Button theme={ButtonTheme.OUTLINED} disabled={disabled}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={cls.options}>
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
                      [cls.active]: active,
                      [cls.disabled]: item.disabled,
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
