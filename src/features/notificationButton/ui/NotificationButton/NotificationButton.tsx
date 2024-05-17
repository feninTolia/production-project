import { NotificationList } from 'entities/Notification';
import { memo } from 'react';
import Notify from 'shared/assets/icons/icon-notify.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';

interface INotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={className}
      direction="bottomLeft"
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={Notify} inverted />
        </Button>
      }
    >
      <NotificationList />
    </Popover>
  );
});
