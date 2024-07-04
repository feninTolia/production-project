import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
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
      <Icon Svg={ThemeIcon} inverted width={40} height={40} />
    </Button>
  );
});
