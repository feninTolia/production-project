import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IUser, userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  IThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<IUser>('/login', authData);

    if (!response.data) {
      throw new Error('No user found');
    }
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    dispatch(userActions.setAuthData(response.data));

    thunkApi.extra.navigate?.('/about');
    return response.data;
  } catch (err: any) {
    console.log('err ==---', err.message);
    return rejectWithValue('Error');
  }
});
