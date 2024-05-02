import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSchema';
import { IArticle } from 'entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
});

const initialState =
  recommendationsAdapter.getInitialState<IArticleDetailsPageRecommendationsSchema>(
    {
      error: undefined,
      isLoading: false,
      ids: [],
      entities: {},
    }
  );

const articleDetailsPageRecommendationsSlice = createSlice({
  name: ' articleDetailsPageRecommendationsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      });
  },
});

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<IStateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ??
      recommendationsAdapter.getInitialState()
  );

export const { reducer: articleDetailsPageRecommendationsReducer } =
  articleDetailsPageRecommendationsSlice;
