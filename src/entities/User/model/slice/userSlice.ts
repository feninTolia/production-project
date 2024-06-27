import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser, IUserSchema } from '../types/userSchema';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: IUserSchema = {
  _isMounted: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authData = undefined;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

      if (user) {
        const parsedUser = JSON.parse(user) as IUser;
        state.authData = parsedUser;
        setFeatureFlags(parsedUser.features);
      }

      state._isMounted = true;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
