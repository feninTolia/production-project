import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface IStoreProviderProps {
  initialState?: IStateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
  children: ReactNode;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;
  const store = createReduxStore(
    initialState,
    asyncReducers as ReducersMapObject<IStateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
