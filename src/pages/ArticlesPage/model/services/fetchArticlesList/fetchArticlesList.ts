import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  undefined,
  IThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<IArticle[]>('/articles', {
      params: { _expand: 'user' },
    });

    if (!response.data) {
      throw new Error('No articles found');
    }

    return response.data;
  } catch (err: any) {
    return rejectWithValue('Error');
  }
});
