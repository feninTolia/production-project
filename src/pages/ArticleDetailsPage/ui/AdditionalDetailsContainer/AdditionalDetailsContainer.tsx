import { getArticleDetailsData } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import cls from './AdditionalDetailsContainer.module.scss';

export const AdditionalDetailsContainer = memo(() => {
  const article = useSelector(getArticleDetailsData);

  if (!article) {
    return null;
  }

  return (
    <Card className={cls.card} padding="24">
      <ArticleAdditionalInfo
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
        articleId={article.id}
      />
    </Card>
  );
});
