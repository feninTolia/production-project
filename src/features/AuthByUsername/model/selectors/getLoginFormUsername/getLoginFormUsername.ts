import { IStateSchema } from 'app/providers/StoreProvider';

export const getLoginFormUserName = (state: IStateSchema) =>
  state.loginForm?.username ?? '';
