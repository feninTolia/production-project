import { memo } from 'react';
import { MainLayout } from '../MainLayout';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = memo(() => {
  return (
    <MainLayout
      header={
        <HStack className={cls.header}>
          <Skeleton width="40px" height="40px" borderRadius="50%" />
        </HStack>
      }
      content={
        <VStack gap="16" className={cls.content}>
          <Skeleton width="70%" height="32px" borderRadius="16px" />
          <Skeleton width="40%" height="20px" borderRadius="16px" />
          <Skeleton width="50%" height="20px" borderRadius="16px" />
          <Skeleton width="30%" height="32px" borderRadius="16px" />
          <Skeleton width="80%" height="40%" borderRadius="16px" />
          <Skeleton width="80%" height="40%" borderRadius="16px" />
        </VStack>
      }
      sidebar={<Skeleton height="100%" width="220px" borderRadius="32px" />}
    />
  );
});
