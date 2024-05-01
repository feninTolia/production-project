import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const timer = useRef() as MutableRefObject<NodeJS.Timeout>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
