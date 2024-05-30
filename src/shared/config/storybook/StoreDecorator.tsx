import { IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article';
import { loginReducer } from '@/features/AuthByUsername';
import { addCommentFormReducer } from '@/features/addCommentForm';
import { profileReducer } from '@/features/editableProfileCard';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { StoryFn } from '@storybook/react';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
