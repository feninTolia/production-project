import { rtkApi } from '@/shared/api/rtkApi';
import { IJsonSettings } from '../model/types/jsonSettings';
import { IUser } from '../model/types/userSchema';

interface IMutationArgs {
  userId: string;
  jsonSettings: IJsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<IUser, IMutationArgs>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: { jsonSettings },
      }),
    }),

    getUserDataById: build.mutation<IUser, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
