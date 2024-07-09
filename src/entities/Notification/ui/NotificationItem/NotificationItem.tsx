import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { INotification } from '../../types';
import cls from './NotificationItem.module.scss';

interface INotificationItemProps {
  className?: string;
  notification: INotification;
}

export const NotificationItem = memo((props: INotificationItemProps) => {
  const { className, notification } = props;
  if (!notification) return null;

  const content = (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Card
          padding="8"
          variant="clear"
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <Text
            title={notification.title}
            text={notification.description}
            className={cls.text}
            size="s"
          />
        </Card>
      }
      off={
        <CardDeprecated
          theme={CardTheme.OUTLINED}
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <TextDeprecated
            title={notification.title}
            text={notification.description}
            className={cls.text}
            size={TextSize.S}
          />
        </CardDeprecated>
      }
    />
  );

  if (notification.href) {
    return (
      <a
        target="_blank"
        href={notification.href}
        rel="noreferrer"
        className={cls.link}
      >
        {content}
      </a>
    );
  }

  return content;
});
