import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { memo } from 'react';
import { IArticlesView } from '../../../model/constants';
import { IArticleListItemSkeletonProps } from '../ArticleListItemSkeleton';
import cls from '../ArticleListItemSkeleton.module.scss';

export const ArticleListItemSkeletonDeprecated = memo(
  (props: IArticleListItemSkeletonProps) => {
    const { className, view = IArticlesView.SMALL } = props;

    if (view === IArticlesView.SMALL) {
      return (
        <div
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card>
            <div className={cls.imageWrapper}>
              <Skeleton width="200px" height="200px" className={cls.img} />
            </div>
            <div className={cls.infoWrapper}>
              <Skeleton width="130px" height="16px" className={cls.types} />
            </div>
            <Skeleton width="150px" height="16px" className={cls.title} />
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton width="30px" height="30px" borderRadius="50%" />
            <Skeleton width="150px" height="16px" className={cls.username} />
            <Skeleton width="150px" height="16px" className={cls.date} />
          </div>
          <Skeleton width="250px" height="24px" className={cls.title} />
          <Skeleton width="100%" height="200px" className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width="200px" height="36px" />
          </div>
        </Card>
      </div>
    );
  }
);
