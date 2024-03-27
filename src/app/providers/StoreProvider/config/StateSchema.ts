import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;

  //Async reducers
  loginForm?: ILoginSchema;
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
