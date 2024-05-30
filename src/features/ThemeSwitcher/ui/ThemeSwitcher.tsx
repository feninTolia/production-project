import ThemeDarkSvg from '@/shared/assets/icons/theme-dark.svg';
import ThemeLightSvg from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/constants/theme';
import { classNames } from '@/shared/lib/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { memo } from 'react';

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
