import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames';
import DynamicModuleLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { getFeatureFlags } from '@/shared/lib/features';

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo((props: IArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');

  const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
  };

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="32" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {isArticleRatingEnabled && <ArticleRating articleId={id} />}
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
