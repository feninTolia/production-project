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

export const store = createReduxStore();

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
