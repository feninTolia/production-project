import { FC } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterActions } from '../model/slice/CounterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const count = useCounterValue();
  const { increment, decrement, add } = useCounterActions();

  const handelIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  const handleAdd = () => {
    add(5);
  };

  return (
    <div>
      <p data-testid="value-title">{count}</p>

      <Button onClick={handelIncrement} data-testid="btn-increment">
        Increment
      </Button>
      <Button onClick={handleDecrement} data-testid="btn-decrement">
        Decrement
      </Button>
      <Button onClick={handleAdd} data-testid="btn-add">
        Add 5
      </Button>
    </div>
  );
};
