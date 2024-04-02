import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileLastname = (state: IStateSchema) =>
  state.profile?.data?.lastname;
