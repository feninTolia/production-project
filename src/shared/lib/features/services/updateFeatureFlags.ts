import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IFeatureFlags } from '@/shared/types/featureFlags';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

interface IMutationArgs {
  userId: string;
  newFeatures: Partial<IFeatureFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
  undefined,
  IMutationArgs,
  IThunkConfig<string>
>('user/saveJsonSettings', async ({ userId, newFeatures }, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        features: { ...getAllFeatureFlags(), ...newFeatures },
      })
    );

    window.location.reload();
  } catch (error) {
    console.log(error);
    return rejectWithValue('updateFeatureFlags error');
  }
});
