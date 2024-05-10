import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames';
import cls from './Dropdown.module.scss';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';

interface IDropDownItem {
  content?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

interface IDropDownProps {
  className?: string;
  items: IDropDownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown(props: IDropDownProps) {
  const { className, items, trigger, direction = 'bottomRight' } = props;
  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className, cls[direction]])}
    >
      <Menu.Button className={cls.button}>{trigger}</Menu.Button>
      <Menu.Items className={cls.menu}>
        {items.map((item, idx) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(cls.item, { [cls.active]: active }, [])}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                key={idx}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} key={idx} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
