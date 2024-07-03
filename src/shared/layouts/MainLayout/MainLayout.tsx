import { ReactElement, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './MainLayout.module.scss';

interface IMainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout = memo((props: IMainLayoutProps) => {
  const { className, content, sidebar, toolbar, header } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
});
