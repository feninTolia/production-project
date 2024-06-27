import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames';
import DynamicModuleLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { toggleFeatures } from '@/shared/lib/features/toggleFeatures';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo((props: IArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
  };

  if (!id) {
    return null;
  }

  const articleRating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id} />,
    off: () => <Card>Ratings will be soon! 📈 </Card>,
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="32" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {articleRating}
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
