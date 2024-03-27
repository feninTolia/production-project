import { Reducer } from '@reduxjs/toolkit';
import {
  IStateSchemaKey,
  IStoreWithReducersManager,
} from 'app/providers/StoreProvider';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

type ReducersList = {
  [name in IStateSchemaKey]?: Reducer;
};
type ReducersListEntry = [IStateSchemaKey, Reducer];

interface IDynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const dispatch = useDispatch();
  const store: IStoreWithReducersManager = useStore();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager?.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager?.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default DynamicModuleLoader;
