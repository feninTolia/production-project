import {
  MutableRefObject,
  PropsWithChildren,
  UIEvent,
  memo,
  useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useDispatch, useSelector } from 'react-redux';
import {
  getScrollSaveScrollByPath,
  scrollSaveActions,
} from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { IStateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle';

interface IPageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PropsWithChildren<IPageProps>) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: IStateSchema) =>
    getScrollSaveScrollByPath(state, pathname)
  );

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  return (
    <main
      className={classNames(cls.Page, {}, [className])}
      ref={wrapperRef}
      onScroll={handleScroll}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </main>
  );
});
