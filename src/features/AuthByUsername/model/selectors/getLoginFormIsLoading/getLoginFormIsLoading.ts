import { IStateSchema } from '@/app/providers/StoreProvider';

export const getLoginFormIsLoading = (state: IStateSchema) =>
  state.loginForm?.isLoading ?? false;
