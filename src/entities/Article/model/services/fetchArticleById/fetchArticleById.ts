import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
  IArticle,
  string,
  IThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<IArticle>('/articles/' + articleId);

    if (!response.data) {
      throw new Error('No article found');
    }
    return response.data;
  } catch (err: any) {
    console.log('err ==---', err.message);
    return rejectWithValue('Error');
  }
});
