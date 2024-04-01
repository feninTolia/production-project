import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { IStateSchema, IStoreWithReducersManager } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';

export const createReduxStore = (
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store: IStoreWithReducersManager = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: { api: $api, navigate: navigate } },
      }),
  });

  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
