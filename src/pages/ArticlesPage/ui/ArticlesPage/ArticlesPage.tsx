import { memo } from 'react';
import { ArticleList, IArticlesView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames';
import { mockArticle } from 'shared/constants/mock';
import cls from './ArticlesPage.module.scss';

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo((props: IArticlesPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList
        // isLoading={true}
        view={IArticlesView.BIG}
        articles={new Array(16)
          .fill(0)
          .map((_, idx) => ({ ...mockArticle, id: `${idx}` }))}
      />
    </div>
  );
});

export default ArticlesPage;
