import { NotificationList } from '@/entities/Notification';
import Notify from '@/shared/assets/icons/icon-notify.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

interface INotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={Notify} inverted />
    </Button>
  );

  return (
    <div>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>

      <BrowserView>
        <Popover className={className} direction="bottomLeft" trigger={trigger}>
          <NotificationList />
        </Popover>
      </BrowserView>
    </div>
  );
});
