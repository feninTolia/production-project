import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IArticle, IArticleDetailsSchema } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: IArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        console.log('rej action.payload', action.payload);

        state.error = action.payload;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<IArticle>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      );
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
