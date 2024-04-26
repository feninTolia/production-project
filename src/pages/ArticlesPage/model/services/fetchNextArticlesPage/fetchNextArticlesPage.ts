import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';

export const fetchNextArticlesPage = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  undefined,
  IThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const page = getArticlesPageNum(getState() as IStateSchema);
  const hasMore = getArticlesPageHasMore(getState() as IStateSchema);
  const isLoading = getArticlesPageIsLoading(getState() as IStateSchema);

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    void dispatch(fetchArticlesList({ page: page + 1 }));
  }
});
