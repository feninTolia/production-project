import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { isMobile } from 'react-device-detect';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = memo((props: ISidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(!!isMobile);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => {
    return sidebarItemsList.map((item) => (
      <SidebarItem
        key={item.path}
        Icon={item.Icon}
        path={item.path}
        text={item.text}
        collapsed={collapsed}
        authOnly={item.authOnly}
      />
    ));
  }, [collapsed, sidebarItemsList]);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND}
        squared
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack role="navigation" gap="16">
        {itemsList}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
});
