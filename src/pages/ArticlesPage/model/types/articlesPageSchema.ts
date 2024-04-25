import { EntityState } from '@reduxjs/toolkit';
import { IArticle, IArticlesView } from 'entities/Article';

export interface IArticlesPageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;

  view: IArticlesView;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;
}
