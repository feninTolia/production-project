import { getLoginFormUsername } from './getLoginFormUsername';
import { IStateSchema } from 'app/providers/StoreProvider';

describe('getLoginFormUsername.test', () => {
  it('should return "test user" ', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: 'test error',
        username: 'test user',
        password: '',
        isLoading: true,
      },
    };
    const isLoading = getLoginFormUsername(state as IStateSchema);
    expect(isLoading).toEqual('test user');
  });
  it('should  return "" with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    const isLoading = getLoginFormUsername(state as IStateSchema);
    expect(isLoading).toEqual('');
  });
});
