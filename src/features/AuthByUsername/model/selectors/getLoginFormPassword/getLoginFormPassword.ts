import { IStateSchema } from '@/app/providers/StoreProvider';

export const getLoginFormPassword = (state: IStateSchema) =>
  state.loginForm?.password ?? '';
