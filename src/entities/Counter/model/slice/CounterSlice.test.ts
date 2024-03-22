import { ICounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './CounterSlice';

describe('CounterSlice.test', () => {
  it('should decrement to 9', () => {
    const state: ICounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: 9,
    });
  });

  it('should increment to 11', () => {
    const state: ICounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 11,
    });
  });

  it('should work with empty initial state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1,
    });
  });
});
