import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticlesView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: IStateSchema) =>
  state.articlesPage?.isLoading || false;

export const getArticlesPageError = (state: IStateSchema) =>
  state.articlesPage?.error;

export const getArticlesPageView = (state: IStateSchema) =>
  state.articlesPage?.view || IArticlesView.SMALL;
