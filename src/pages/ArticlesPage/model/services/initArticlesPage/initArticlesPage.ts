import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  undefined,
  IThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlesPageInited(getState() as IStateSchema);

  if (!inited) {
    dispatch(articlesPageActions.initState());
    void dispatch(fetchArticlesList({ page: 1 }));
  }
});
