import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from '../types/user';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
