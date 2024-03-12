import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';
import ThemeDarkSvg from 'shared/assets/icons/theme-dark.svg';
import ThemeLightSvg from 'shared/assets/icons/theme-light.svg';
interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <ThemeLightSvg /> : <ThemeDarkSvg />}
    </Button>
  );
};
