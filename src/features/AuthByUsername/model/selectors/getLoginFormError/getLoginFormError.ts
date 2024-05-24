import { IStateSchema } from '@/app/providers/StoreProvider';

export const getLoginFormError = (state: IStateSchema) =>
  state.loginForm?.error;
