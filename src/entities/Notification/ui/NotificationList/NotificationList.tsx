import { classNames } from '@/shared/lib/classNames';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import { useNotificationList } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

interface INotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: INotificationListProps) => {
  const { className } = props;
  const { data: notifications, isLoading } = useNotificationList(null, {
    pollingInterval: 10000,
  });

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.NotificationList, {}, [className])}
      >
        <Skeleton width="200px" borderRadius="12px" height="76px" />
        <Skeleton width="200px" borderRadius="12px" height="76px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </VStack>
  );
});
