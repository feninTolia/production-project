import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './StickyContentLayout.module.scss';

interface IStickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout = memo((props: IStickyContentLayoutProps) => {
  const { className, left, content, right } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.StickyContentLayout, {}, [className])}>
      {right && <div className={cls.right}>{right}</div>}
      <div className={cls.content}>{content}</div>
      {left && <div className={cls.left}>{left}</div>}
    </div>
  );
});
