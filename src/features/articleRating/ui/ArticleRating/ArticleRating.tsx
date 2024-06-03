import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  useArticleRatingList,
  useRateArticle,
} from '../../api/articleRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';

interface IArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: IArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const user = useSelector(getUserAuthData);
  const { data, isLoading } = useArticleRatingList({
    userId: user?.id ?? '',
    articleId,
  });
  const [mutate] = useRateArticle();

  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starCount: number, feedback?: string) => {
      if (!user?.id) return;

      try {
        void mutate({
          userId: user?.id,
          articleId,
          rate: starCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, mutate, user?.id]
  );

  const handleAccept = useCallback(
    (starCount: number, feedback?: string) => {
      handleRateArticle(starCount, feedback);
    },
    [handleRateArticle]
  );

  const handleCancel = useCallback(
    (starCount: number) => {
      handleRateArticle(starCount);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" height="100px" />;
  }
  return (
    <RatingCard
      className={className}
      title={t('Rate the article!')}
      feedbackTitle={t('Leave your feedback')}
      hasFeedback
      rate={rating?.rate}
      onAccept={handleAccept}
      onCancel={handleCancel}
    />
  );
});

export default ArticleRating;
