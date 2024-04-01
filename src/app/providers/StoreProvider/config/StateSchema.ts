import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { AxiosInstance } from 'axios';
import { ICounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'entities/Profile';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;

  //Async reducers
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
}

export type IStateSchemaKey = keyof IStateSchema;

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
  navigate: (to: To, options?: NavigateOptions) => void;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
}
