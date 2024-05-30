import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { AxiosInstance } from 'axios';
import { IArticleDetailsSchema } from '@/entities/Article';
import { ICounterSchema } from '@/entities/Counter';
import { IUserSchema } from '@/entities/User';
import { ILoginSchema } from '@/features/AuthByUsername';
import { IScrollSaveSchema } from '@/features/ScrollSave';
import { IAddCommentFormSchema } from '@/features/addCommentForm';
import { IProfileSchema } from '@/features/editableProfileCard';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { IArticlesPageSchema } from '@/pages/ArticlesPage';
import { NavigateFunction } from 'react-router-dom';
import { CombinedState } from 'redux';
import { rtkApi } from '@/shared/api/rtkApi';

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  scrollSave: IScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  addCommentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type IStateSchemaKey = keyof IStateSchema;
export type MountedReducers = OptionalRecord<IStateSchemaKey, boolean>;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>;
  add: (key: IStateSchemaKey, reducer: Reducer) => void;
  remove: (key: IStateSchemaKey) => void;
}

export interface IStoreWithReducersManager
  extends EnhancedStore<
    IStateSchema,
    AnyAction,
    [ThunkMiddlewareFor<IStateSchema>]
  > {
  reducerManager?: IReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state?: IStateSchema;
}
