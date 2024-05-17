import { Popover as HPopover } from '@headlessui/react';
import { ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { DropdownDirection } from 'shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface IHPopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  direction?: DropdownDirection;
}

export const Popover = memo((props: IHPopoverProps) => {
  const { className, trigger, direction = 'bottomRight', children } = props;

  return (
    <HPopover className={classNames(popupCls.popup, {}, [className])}>
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.content, {}, [popupCls[direction]])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
