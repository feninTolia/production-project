import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';

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
    <Menu as="div" className={classNames(popupCls.popup, {}, [className])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [popupCls[direction]])}>
        {items.map((item, idx) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(
                cls.item,
                { [popupCls.active]: active },
                []
              )}
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
