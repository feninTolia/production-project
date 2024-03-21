import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/CounterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';

export const Counter: FC = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <p>
        {t('Value')}- {count}
      </p>

      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};
