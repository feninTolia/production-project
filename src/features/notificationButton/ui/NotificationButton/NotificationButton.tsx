import { NotificationList } from '@/entities/Notification';
import Notify from '@/shared/assets/icons/icon-notify.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';
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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Icon
          Svg={Notify}
          clickable
          onClick={onOpenDrawer}
          width={24}
          height={24}
        />
      }
      off={
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
          <IconDeprecated Svg={Notify} inverted />
        </Button>
      }
    />
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
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
            <Popover
              className={className}
              direction="bottomLeft"
              trigger={trigger}
            >
              <NotificationList />
            </Popover>
          }
          off={
            <PopoverDeprecated
              className={className}
              direction="bottomLeft"
              trigger={trigger}
            >
              <NotificationList />
            </PopoverDeprecated>
          }
        />
      </BrowserView>
    </div>
  );
});
