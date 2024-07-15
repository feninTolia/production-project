import { ToggleFeatures } from '@/shared/lib/features';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { IArticlesView } from '../../model/constants';
import { IArticle } from '../../model/types/article';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

interface IArticleListItemProps {
  className?: string;
  view: IArticlesView;
  article: IArticle;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ArticleListItemRedesigned {...props} />}
      off={<ArticleListItemDeprecated {...props} />}
    />
  );
});
