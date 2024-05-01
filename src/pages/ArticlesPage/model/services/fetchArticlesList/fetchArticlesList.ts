import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle, IArticleType } from 'entities/Article';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface IFetchArticleListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  IFetchArticleListProps,
  IThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const limit = getArticlesPageLimit(getState() as IStateSchema);
  const order = getArticlesPageOrder(getState() as IStateSchema);
  const sort = getArticlesPageSort(getState() as IStateSchema);
  const search = getArticlesPageSearch(getState() as IStateSchema);
  const page = getArticlesPageNum(getState() as IStateSchema);
  const type = getArticlesPageType(getState() as IStateSchema);

  try {
    addQueryParams({ sort, order, search });

    const response = await extra.api.get<IArticle[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
        type: type === IArticleType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error('No articles found');
    }

    return response.data;
  } catch (err: any) {
    return rejectWithValue('Error');
  }
});
