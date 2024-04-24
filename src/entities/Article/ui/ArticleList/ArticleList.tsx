import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { IArticle, IArticlesView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface IArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: IArticlesView;
}

const getSkeletons = (view: IArticlesView) => {
  return new Array(view === IArticlesView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, idx) => <ArticleListItemSkeleton key={idx} view={view} />);
};

export const ArticleList = memo((props: IArticleListProps) => {
  const { className, articles, view = IArticlesView.SMALL, isLoading } = props;

  const renderArticle = (article: IArticle) => {
    return <ArticleListItem key={article.id} article={article} view={view} />;
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
