import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

const error = 'Error some';

describe('getProfileError.test', () => {
  it('should return profile error', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        error,
      },
    };
    expect(getProfileError(state as IStateSchema)).toEqual(error);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileError(state as IStateSchema)).toEqual(undefined);
  });
});
