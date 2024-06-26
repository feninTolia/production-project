import { saveJsonSettings } from '@/entities/User';
import ThemeDarkSvg from '@/shared/assets/icons/theme-dark.svg';
import ThemeLightSvg from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/constants/theme';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { memo, useCallback } from 'react';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: IThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((theme) => {
      console.log('theme changed to - ', theme);
      void dispatch(saveJsonSettings({ theme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      onClick={onToggleHandler}
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <ThemeDarkSvg /> : <ThemeLightSvg />}
    </Button>
  );
});
