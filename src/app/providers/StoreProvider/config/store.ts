import { configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: IStateSchema) => {
  return configureStore<IStateSchema>({
    reducer: { counter: counterReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
