import { EntityState } from '@reduxjs/toolkit';
import { IArticle } from '@/entities/Article';

export interface IArticleDetailsPageRecommendationsSchema
  extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;
}
