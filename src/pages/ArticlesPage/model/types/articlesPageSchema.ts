import { EntityState } from '@reduxjs/toolkit';
import {
  ArticleSortField,
  IArticle,
  IArticleType,
  IArticlesView,
} from '@/entities/Article';

import { SortOrder } from '@/shared/types';

export interface IArticlesPageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: IArticlesView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: IArticleType;

  _inited: boolean;
}
