import { getLoginFormPassword } from './getLoginFormPassword';
import { IStateSchema } from 'app/providers/StoreProvider';

describe('getLoginFormPassword.test', () => {
  it('should return "test123" ', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        error: 'error',
        username: 'user',
        password: 'test123',
        isLoading: true,
      },
    };
    const isLoading = getLoginFormPassword(state as IStateSchema);
    expect(isLoading).toEqual('test123');
  });
  it('should  return "" with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    const isLoading = getLoginFormPassword(state as IStateSchema);
    expect(isLoading).toEqual('');
  });
});
