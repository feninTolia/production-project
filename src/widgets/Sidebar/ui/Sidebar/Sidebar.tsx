import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import Arrow from '@/shared/assets/icons/Union.svg';
import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { memo, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = memo((props: ISidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(!!isMobile);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = (): void => {
    setCollapsed((prev) => !prev);
    console.log('toggle');
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className]
          )}
        >
          <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
          <VStack className={cls.items} role="navigation" gap="8">
            {itemsList}
          </VStack>
          <Icon
            onClick={onToggle}
            data-testid="sidebar-toggle"
            className={cls.collapseBtn}
            Svg={Arrow}
            clickable
            width={16}
            height={16}
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
          </div>
        </aside>
      }
      off={
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
      }
    />
  );
});
