import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticle, IArticlesView } from 'entities/Article';
import { IArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';

const articlesAdapter = createEntityAdapter<IArticle>();

const initialState = articlesAdapter.getInitialState<IArticlesPageSchema>({
  error: undefined,
  isLoading: false,
  view: IArticlesView.SMALL,
  ids: [],
  entities: {},
  page: 1,
  hasMore: true,
  _inited: false,
});

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<IArticlesView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCAL_STORAGE_KEY
      ) as IArticlesView;

      state.view = view;
      state.limit = view === IArticlesView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          state.isLoading = false;
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
        }
      );
  },
});

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesPage ?? articlesAdapter.getInitialState()
);

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;
