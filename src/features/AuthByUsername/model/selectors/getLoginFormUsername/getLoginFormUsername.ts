import { IStateSchema } from '@/app/providers/StoreProvider';

export const getLoginFormUsername = (state: IStateSchema) =>
  state.loginForm?.username ?? '';
