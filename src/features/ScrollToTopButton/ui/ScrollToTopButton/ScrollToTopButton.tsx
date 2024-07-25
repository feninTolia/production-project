import ArrowCircleUp from '@/shared/assets/icons/arrow-circle-up.svg';
import { classNames } from '@/shared/lib/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { memo, useCallback } from 'react';

interface IScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: IScrollToTopButtonProps) => {
  const { className } = props;

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Icon
      Svg={ArrowCircleUp}
      clickable
      onClick={handleClick}
      width={32}
      height={32}
      className={classNames('', {}, [className])}
    />
  );
});
