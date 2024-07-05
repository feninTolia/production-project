import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import SwapTheme from '@/shared/assets/icons/SwapTheme.svg';
import { classNames } from '@/shared/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { memo, useCallback } from 'react';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: IThemeSwitcherProps) => {
  const { className } = props;
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((theme) => {
      console.log('theme changed to - ', theme);
      void dispatch(saveJsonSettings({ theme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Icon
          Svg={SwapTheme}
          width={30}
          height={30}
          clickable
          onClick={onToggleHandler}
        />
      }
      off={
        <Button
          onClick={onToggleHandler}
          className={classNames('', {}, [className])}
          theme={ButtonTheme.CLEAR}
        >
          <IconDeprecated Svg={ThemeIcon} inverted width={40} height={40} />
        </Button>
      }
    />
  );
});
