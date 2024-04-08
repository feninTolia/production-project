import { IStateSchema } from 'app/providers/StoreProvider';

export const getUserIsMounted = (state: IStateSchema) => state.user._isMounted;
