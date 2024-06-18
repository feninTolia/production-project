import { buildSelector } from '@/shared/lib/store';
import { IStateSchema } from '@/app/providers/StoreProvider';

// export const getCounterValue = createSelector(
//   getCounter,
//   (counter) => counter.value
// );

export const [useCounterValue, getCounterValue] = buildSelector(
  (state: IStateSchema) => state.counter.value
);
