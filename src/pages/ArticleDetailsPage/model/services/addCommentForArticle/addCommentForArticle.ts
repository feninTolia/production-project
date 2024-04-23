import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  IComment,
  string,
  IThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkApi;
  try {
    const user = getUserAuthData(getState() as IStateSchema);
    const article = getArticleDetailsData(getState() as IStateSchema);

    if (!user || !text || !article) {
      return rejectWithValue('No data');
    }

    const response = await extra.api.post<IComment>('/comments', {
      articleId: article.id,
      userId: user.id,
      text,
    });

    if (!response.data) {
      throw new Error('No user found');
    }

    void dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (err: any) {
    return rejectWithValue('Error');
  }
});
