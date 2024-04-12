import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { IArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id,
});

const initialState =
  commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {},
  });

const articleDetailsCommentsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<IComment[]>) => {
          state.isLoading = false;
          commentsAdapter.upsertMany(state, action.payload);
        }
      );
  },
});

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>(
  (state) => state.articleDetailsComments ?? commentsAdapter.getInitialState()
);

// export const {} = articleDetailsCommentsSlice.actions;

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
