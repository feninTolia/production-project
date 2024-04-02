import { StoryFn } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<IStateSchema>, asyncReducers?: ReducersList) =>
  (Story: StoryFn) => (
    <StoreProvider
      initialState={state as IStateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
