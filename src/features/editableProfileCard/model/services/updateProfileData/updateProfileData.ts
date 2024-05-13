import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from 'entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  IProfile,
  undefined,
  IThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  try {
    const formData = getProfileForm(getState() as IStateSchema);

    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    const response = await extra.api.put<IProfile>(
      '/profile/' + formData?.id,
      formData
    );

    if (!response.data) {
      throw new Error('No profile found');
    }
    return response.data;
  } catch (err: any) {
    console.log('err ==---', err.message);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
