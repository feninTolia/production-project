import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { IStateSchema, IStoreWithReducersManager } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

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

  const store: IStoreWithReducersManager = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  store.reducerManager = reducerManager;

  return store;
};
