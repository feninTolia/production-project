import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>Toggle</Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher/> */}
      </div>
    </div>
  );
};
