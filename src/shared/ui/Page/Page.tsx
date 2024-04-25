import { MutableRefObject, PropsWithChildren, memo, useRef } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

interface IPageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PropsWithChildren<IPageProps>) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section className={classNames(cls.Page, {}, [className])} ref={wrapperRef}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
