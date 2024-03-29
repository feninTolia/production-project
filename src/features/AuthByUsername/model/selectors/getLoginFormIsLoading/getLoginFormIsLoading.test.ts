import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginFormIsLoading } from './getLoginFormIsLoading';
import { IStateSchema } from 'app/providers/StoreProvider';

describe('getLoginFormIsLoading.test', () => {
  it('should return true ', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: 'test error',
        username: '',
        password: '',
        isLoading: true,
      },
    };
    const isLoading = getLoginFormIsLoading(state as IStateSchema);
    expect(isLoading).toEqual(true);
  });
  it('should  return false with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    const isLoading = getLoginFormIsLoading(state as IStateSchema);
    expect(isLoading).toEqual(false);
  });
});
