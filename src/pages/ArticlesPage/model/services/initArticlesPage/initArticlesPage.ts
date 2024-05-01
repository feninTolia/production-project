import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article';

export const initArticlesPage = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  URLSearchParams | undefined,
  IThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlesPageInited(getState() as IStateSchema);

  if (!inited) {
    const orderFromUrl = searchParams?.get('order') as SortOrder;
    const sortFromUrl = searchParams?.get('sort') as ArticleSortField;
    const searchFromUrl = searchParams?.get('search');

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl));
    }
    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl));
    }
    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl));
    }

    dispatch(articlesPageActions.initState());
    void dispatch(fetchArticlesList({}));
  }
});
