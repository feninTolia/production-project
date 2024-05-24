import { IStateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
  it('should return value 10', () => {
    const state: DeepPartial<IStateSchema> = { counter: { value: 10 } };

    expect(getCounterValue(state as IStateSchema)).toEqual(10);
  });
});
