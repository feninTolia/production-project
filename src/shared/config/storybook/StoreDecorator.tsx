import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
  ) =>
  (Story: StoryFn) => (
    <StoreProvider
      initialState={state as IStateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
