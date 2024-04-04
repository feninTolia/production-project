import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  IProfile,
  undefined,
  IThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<IProfile>('/profile');

    if (!response.data) {
      throw new Error('No profile found');
    }
    return response.data;
  } catch (err: any) {
    console.log('err ==---', err.message);
    return rejectWithValue('Error');
  }
});
