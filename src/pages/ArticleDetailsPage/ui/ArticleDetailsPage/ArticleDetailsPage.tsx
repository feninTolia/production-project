import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames';
import DynamicModuleLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsContainer } from '../ArticleDetailsContainer/ArticleDetailsContainer';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { AdditionalDetailsContainer } from '../AdditionalDetailsContainer/AdditionalDetailsContainer';

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

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <StickyContentLayout
            right={<AdditionalDetailsContainer />}
            content={
              <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
              >
                <VStack gap="32" max>
                  <ArticleDetailsContainer />
                  <ArticleRating articleId={id} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments id={id} />
                </VStack>
              </Page>
            }
          />
        }
        off={
          <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack gap="32" max>
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              <CardDeprecated>Ratings will be soon! 📈 </CardDeprecated>
              <ArticleRecommendationsList />
              <ArticleDetailsComments id={id} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
