import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IArticlesView } from '../../model/constants';
import { IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface IArticleListProps {
  className?: string;
  articles?: IArticle[];
  isLoading?: boolean;
  view?: IArticlesView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: IArticlesView) => {
  return new Array(view === IArticlesView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, idx) => <ArticleListItemSkeleton key={idx} view={view} />);
};

export const ArticleList = memo((props: IArticleListProps) => {
  const {
    className,
    articles,
    view = IArticlesView.SMALL,
    isLoading,
    target,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: IArticle) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        target={target}
      />
    );
  };

  if (!articles) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t('No articles found')} />
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleList, {}, [className, cls[view]])}
      data-testid="ArticleList"
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
