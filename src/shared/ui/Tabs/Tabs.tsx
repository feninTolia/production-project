import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card, CardTheme } from '../Card/Card';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Tabs.module.scss';

export interface ITabItem {
  value: string;
  content: ReactNode;
}

interface ITabsProps {
  className?: string;
  tabs: ITabItem[];
  value: string;
  onTabClick: (tab: ITabItem) => void;
}

export const Tabs = memo((props: ITabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  const handleTabClick = useCallback(
    (tab: ITabItem) => {
      return () => onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          theme={ButtonTheme.CLEAR}
          onClick={handleTabClick(tab)}
          disabled={value === tab.value}
        >
          <Card
            className={cls.tab}
            theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          >
            {tab.content}
          </Card>
        </Button>
      ))}
    </div>
  );
});
