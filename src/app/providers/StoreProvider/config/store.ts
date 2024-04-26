import {
  CombinedState,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { IStateSchema, IThunkExtraArg } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';

export const createReduxStore = (
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: IThunkExtraArg = { api: $api };

  const store = configureStore({
    // @ts-expect-error !!!
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: extraArg },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
