/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDataByIdQuery } from '../../api/userApi';
import { IUser } from '../types/userSchema';
import {
  LOCAL_STORAGE_LAST_DESIGN_KEY,
  USER_LOCAL_STORAGE_KEY,
} from '@/shared/constants/localStorage';

export const initAuthData = createAsyncThunk<IUser, void, IThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        response.features?.isAppRedesigned ? 'new' : 'old'
      );

      return response;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue('');
    }
  }
);
