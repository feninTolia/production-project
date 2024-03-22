import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config/StateSchema';

export interface IStoreProviderProps {
  initialState?: IStateSchema;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
  children,
  initialState,
}) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
