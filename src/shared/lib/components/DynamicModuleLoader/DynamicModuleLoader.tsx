import { Reducer } from '@reduxjs/toolkit';
import {
  IStateSchema,
  IStateSchemaKey,
  IStoreWithReducersManager,
} from 'app/providers/StoreProvider';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in IStateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>;
};

interface IDynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const dispatch = useDispatch();
  const store: IStoreWithReducersManager = useStore();

  useEffect(() => {
    const reducersMap = store.reducerManager?.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = reducersMap?.[name as IStateSchemaKey];

      if (!mounted) {
        store.reducerManager?.add(name as IStateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager?.remove(name as IStateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default DynamicModuleLoader;
