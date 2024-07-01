import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser, IUserSchema } from '../types/userSchema';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { IJsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

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
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id);
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, action: PayloadAction<IJsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload;
        }
      }
    );
    builder.addCase(
      initAuthData.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.authData = action.payload;
        setFeatureFlags(action.payload.features);
        state._isMounted = true;
      }
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state._isMounted = true;
    });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
