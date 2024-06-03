import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text, TextSize } from '@/shared/ui/Text';
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
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text
        title={notification.title}
        text={notification.description}
        className={cls.text}
        size={TextSize.S}
      />
    </Card>
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
