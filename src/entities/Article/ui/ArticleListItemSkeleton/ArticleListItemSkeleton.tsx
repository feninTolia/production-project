import { ToggleFeatures } from '@/shared/lib/features';
import { memo } from 'react';
import { IArticlesView } from '../../model/constants';
import { ArticleListItemSkeletonDeprecated } from './ArticleListItemSkeletonDeprecated/ArticleListItemSkeletonDeprecated';
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemSkeletonRedesigned/ArticleListItemSkeletonRedesigned';

export interface IArticleListItemSkeletonProps {
  className?: string;
  view: IArticlesView;
}

export const ArticleListItemSkeleton = memo(
  (props: IArticleListItemSkeletonProps) => {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<ArticleListItemSkeletonDeprecated {...props} />}
        on={<ArticleListItemSkeletonRedesigned {...props} />}
      />
    );
  }
);
