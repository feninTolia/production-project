import { IRating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface IGetProfileRatingArgs {
  userId: string;
  profileId: string;
}

interface IRateProfileArgs {
  userId: string;
  profileId: string;
  rate: number;
  feedback?: string;
}

const ProfileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<IRating[], IGetProfileRatingArgs>({
      query: ({ userId, profileId }) => ({
        url: '/profile-ratings',
        params: { userId, profileId },
      }),
    }),
    rateProfile: build.mutation<null, IRateProfileArgs>({
      query: (arg) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const useProfileRatingList = ProfileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = ProfileRatingApi.useRateProfileMutation;
