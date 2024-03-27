import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config/StateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

export interface IStoreProviderProps {
  initialState?: IStateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider: FC<IStoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(
    initialState,
    asyncReducers as ReducersMapObject<IStateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
