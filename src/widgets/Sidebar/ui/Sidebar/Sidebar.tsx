import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = memo((props: ISidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
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
    <div
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
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
});
