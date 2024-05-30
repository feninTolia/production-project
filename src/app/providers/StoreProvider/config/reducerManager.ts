import {
  AnyAction,
  Reducer,
  ReducersMapObject,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  IReducerManager,
  IStateSchema,
  IStateSchemaKey,
  // MountedReducers,
} from './StateSchema';

export function createReducerManager(
  initialReducers: ReducersMapObject<IStateSchema>
): IReducerManager {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: IStateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: IStateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: IStateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: IStateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
