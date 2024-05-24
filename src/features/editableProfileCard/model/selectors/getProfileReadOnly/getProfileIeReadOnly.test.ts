import { IStateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly.test', () => {
  it('should return profile readOnly', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadOnly(state as IStateSchema)).toBe(true);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileReadOnly(state as IStateSchema)).toEqual(undefined);
  });
});
