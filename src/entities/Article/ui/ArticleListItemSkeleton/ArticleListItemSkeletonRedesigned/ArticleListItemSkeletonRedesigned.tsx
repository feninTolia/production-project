import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { memo } from 'react';
import { IArticlesView } from '../../../model/constants';
import { IArticleListItemSkeletonProps } from '../ArticleListItemSkeleton';
import cls from './ArticleListItemSkeletonRedesigned.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemSkeletonRedesigned = memo(
  (props: IArticleListItemSkeletonProps) => {
    const { className, view = IArticlesView.SMALL } = props;

    if (view === IArticlesView.SMALL) {
      return (
        <Card
          padding="0"
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Skeleton width="250px" height="140px" />
          <div className={cls.infoWrapper}>
            <Skeleton width="100%" height="24px" />
            <Skeleton width="100%" height="24px" />
            <Skeleton width="100%" height="24px" />
            <Skeleton width="100%" height="16px" />
            <HStack gap="4" align="center" className={cls.userInfo}>
              <Skeleton width="32px" height="32px" borderRadius="100%" />
              <Skeleton width="100px" height="16px" />
            </HStack>
          </div>
        </Card>
      );
    }

    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card} padding="24">
          <div className={cls.header}>
            <Skeleton width="30px" height="30px" borderRadius="50%" />
            <Skeleton width="150px" height="16px" className={cls.username} />
            <Skeleton width="150px" height="16px" className={cls.date} />
          </div>
          <Skeleton width="250px" height="24px" className={cls.title} />
          <Skeleton width="100%" height="420px" className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width="200px" height="36px" />
          </div>
        </Card>
      </div>
    );
  }
);
