import { IStateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getCounter', () => {
  it('should return value of 10', () => {
    const state: DeepPartial<IStateSchema> = { counter: { value: 10 } };
    expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
  });
});
