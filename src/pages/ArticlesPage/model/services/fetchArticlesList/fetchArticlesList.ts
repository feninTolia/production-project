import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface IFetchArticleListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  IFetchArticleListProps,
  IThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
  const { page = 1 } = props;
  const { extra, rejectWithValue, getState } = thunkApi;

  const limit = getArticlesPageLimit(getState() as IStateSchema);

  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: { _expand: 'user', _page: page, _limit: limit },
    });

    if (!response.data) {
      throw new Error('No articles found');
    }

    return response.data;
  } catch (err: any) {
    return rejectWithValue('Error');
  }
});
