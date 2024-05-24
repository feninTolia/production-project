import { getLoginFormError } from './getLoginFormError';
import { IStateSchema } from '@/app/providers/StoreProvider';

describe('getLoginFormError.test', () => {
  it('should return test error', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: 'test error',
        username: '',
        password: '',
        isLoading: false,
      },
    };
    const error = getLoginFormError(state as IStateSchema);
    expect(error).toEqual('test error');
  });
  it('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    const error = getLoginFormError(state as IStateSchema);
    expect(error).toEqual(undefined);
  });
});
