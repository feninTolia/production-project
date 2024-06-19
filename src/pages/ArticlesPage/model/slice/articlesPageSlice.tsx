import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { IStateSchema } from '@/app/providers/StoreProvider';
import {
  ArticleSortField,
  IArticle,
  IArticleType,
  IArticlesView,
} from '@/entities/Article';
import { IArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { SortOrder } from '@/shared/types/sort';

const articlesAdapter = createEntityAdapter<IArticle>();

const initialState = articlesAdapter.getInitialState<IArticlesPageSchema>({
  error: undefined,
  isLoading: false,
  view: IArticlesView.SMALL,
  ids: [],
  entities: {},
  page: 1,
  limit: 9,
  hasMore: true,
  search: '',
  sort: ArticleSortField.CREATED,
  order: 'asc',
  type: IArticleType.ALL,
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
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<IArticleType>) => {
      state.type = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
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

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length === state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      });
  },
});

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesPage ?? articlesAdapter.getInitialState()
);

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;
