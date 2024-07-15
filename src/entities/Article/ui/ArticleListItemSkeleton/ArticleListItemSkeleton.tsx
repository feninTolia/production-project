import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { IArticlesView } from '../../model/constants';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import cls from './ArticleListItemSkeleton.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

interface IArticleListItemSkeletonProps {
  className?: string;
  view: IArticlesView;
}

export const ArticleListItemSkeleton = memo(
  (props: IArticleListItemSkeletonProps) => {
    const { className, view = IArticlesView.SMALL } = props;

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => SkeletonDeprecated,
      on: () => SkeletonRedesigned,
    });
    const Card = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => CardDeprecated,
      on: () => CardRedesigned,
    });

    if (view === IArticlesView.SMALL) {
      return (
        <div
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card padding="16">
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
