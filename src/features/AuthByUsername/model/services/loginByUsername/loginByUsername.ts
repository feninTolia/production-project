import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entities/User';
import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkApi) => {
  try {
    const response = await axios.post<IUser>(
      'http://localhost:8000/login',
      authData
    );

    if (!response.data) {
      throw new Error('No user found');
    }

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (err) {
    console.log('err ==---', err.message);
    return thunkApi.rejectWithValue('Error');
  }
});
