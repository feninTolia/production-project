import { IStateSchema } from '@/app/providers/StoreProvider';
import {
  getScrollSaveScrollByPath,
  scrollSaveActions,
} from '@/features/ScrollSave';
import { classNames } from '@/shared/lib/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import {
  MutableRefObject,
  PropsWithChildren,
  UIEvent,
  memo,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import cls from './Page.module.scss';
import { ITestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/lib/features';

interface IPageProps extends ITestProps {
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
    wrapperRef: toggleFeatures({
      name: 'isArticleRatingEnabled',
      off: () => wrapperRef,
      on: () => undefined,
    }),
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
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => cls.PageRedesigned,
          off: () => cls.Page,
        }),
        {},
        [className]
      )}
      ref={wrapperRef}
      onScroll={handleScroll}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </main>
  );
});
