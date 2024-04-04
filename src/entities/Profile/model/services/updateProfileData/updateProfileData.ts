import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  IProfile,
  undefined,
  IThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  try {
    const formData = getProfileForm(getState() as IStateSchema);
    const response = await extra.api.put<IProfile>('/profile', formData);

    if (!response.data) {
      throw new Error('No profile found');
    }
    return response.data;
  } catch (err: any) {
    console.log('err ==---', err.message);
    return rejectWithValue('Error');
  }
});
