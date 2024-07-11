import { classNames } from '@/shared/lib/classNames';
import { ReactNode, memo, useCallback } from 'react';
import { Card } from '../Card/Card';
import { Flex, FlexDirection, FlexGap } from '../Stack/Flex/Flex';
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
  direction?: FlexDirection;
  gap?: FlexGap;
}

export const Tabs = memo((props: ITabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
    direction = 'column',
    gap = '8',
  } = props;

  const handleTabClick = useCallback(
    (tab: ITabItem) => {
      return () => onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <Flex
      direction={direction}
      gap={gap}
      align="start"
      className={classNames(cls.Tabs, {}, [className])}
    >
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          onClick={handleTabClick(tab)}
          className={cls.tab}
          border="rounded"
          style={{ padding: '8px 16px' }}
          variant={value === tab.value ? 'light' : 'primary'}
        >
          {tab.content}
        </Card>
      ))}
    </Flex>
  );
});
