import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  IComment[],
  string | undefined,
  IThunkConfig<string>
>(
  'articleDetailsPage/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
      return rejectWithValue('No article id');
    }

    try {
      const response = await extra.api.get<IComment[]>('/comments/', {
        params: { articleId, _expand: 'user' },
      });

      if (!response.data) {
        throw new Error('No comments found');
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue('Error');
    }
  }
);
