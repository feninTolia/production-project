import { rtkApi } from '@/shared/api/rtkApi';
import { IFeatureFlags } from '@/shared/types/featureFlags';

interface IMutationArgs {
  userId: string;
  features: Partial<IFeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<undefined, IMutationArgs>({
      query: ({ userId, features }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: { features },
      }),
    }),
  }),
});

export const updateFeatureFlagsMutation =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate;
