import { rtkApi } from 'shared/api/rtkApi';
import { INotification } from '../types';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationList: build.query<INotification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotificationList = notificationApi.useGetNotificationListQuery;
