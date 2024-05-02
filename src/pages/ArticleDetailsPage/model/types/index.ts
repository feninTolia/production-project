import { IArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { IArticleDetailsPageRecommendationsSchema } from './articleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: IArticleDetailsCommentsSchema;
  recommendations: IArticleDetailsPageRecommendationsSchema;
}
