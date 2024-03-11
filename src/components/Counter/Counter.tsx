import { useState } from 'react';
import classes from './counter.module.scss';

export const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <button className={classes.btn} onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </div>
  );
};
