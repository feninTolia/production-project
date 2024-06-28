import { IStateSchema, IThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { IJsonSettings } from '../types/jsonSettings';

export const saveJsonSettings = createAsyncThunk<
  IJsonSettings,
  IJsonSettings,
  IThunkConfig<string>
>('user/saveJsonSettings', async (jsonSettings, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi;

  const userData = getUserAuthData(getState() as IStateSchema);
  const currentSettings = getJsonSettings(getState() as IStateSchema);

  if (!userData) {
    return rejectWithValue('');
  }

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: { ...currentSettings, ...jsonSettings },
      })
    ).unwrap();

    if (!response.jsonSettings) {
      return rejectWithValue('');
    }

    return response.jsonSettings;
  } catch (err: any) {
    console.log(err);
    return rejectWithValue('');
  }
});
