import { IStateSchema } from '@/app/providers/StoreProvider';
import {
  IArticlesView,
  ArticleSortField,
  IArticleType,
} from '@/entities/Article';

export const getArticlesPageIsLoading = (state: IStateSchema) =>
  state.articlesPage?.isLoading ?? false;
export const getArticlesPageError = (state: IStateSchema) =>
  state.articlesPage?.error;
export const getArticlesPageView = (state: IStateSchema) =>
  state.articlesPage?.view ?? IArticlesView.SMALL;
export const getArticlesPageNum = (state: IStateSchema) =>
  state.articlesPage?.page ?? 1;
export const getArticlesPageLimit = (state: IStateSchema) =>
  state.articlesPage?.limit ?? 9;
export const getArticlesPageHasMore = (state: IStateSchema) =>
  state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: IStateSchema) =>
  state.articlesPage?._inited;
export const getArticlesPageSearch = (state: IStateSchema) =>
  state.articlesPage?.search ?? '';
export const getArticlesPageSort = (state: IStateSchema) =>
  state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageOrder = (state: IStateSchema) =>
  state.articlesPage?.order ?? 'asc';
export const getArticlesPageType = (state: IStateSchema) =>
  state.articlesPage?.type ?? IArticleType.ALL;
