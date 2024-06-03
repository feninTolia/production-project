import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { counterActions } from '../model/slice/CounterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <p data-testid="value-title">{count}</p>

      <Button onClick={increment} data-testid="btn-increment">
        Increment
      </Button>
      <Button onClick={decrement} data-testid="btn-decrement">
        Decrement
      </Button>
    </div>
  );
};
