import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames';
import ThemeDarkSvg from 'shared/assets/icons/theme-dark.svg';
import ThemeLightSvg from 'shared/assets/icons/theme-light.svg';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: IThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <ThemeDarkSvg /> : <ThemeLightSvg />}
    </Button>
  );
});
