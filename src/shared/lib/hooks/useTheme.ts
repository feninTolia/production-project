import { Theme } from '@/shared/constants/theme';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface IUseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.PINK;
        break;
      case Theme.PINK:
        newTheme = Theme.LIGHT;
        break;
      default:
        newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    // document.body.className = newTheme;

    saveAction?.(newTheme);
  };

  return {
    theme: theme ?? Theme.LIGHT,
    toggleTheme,
  };
};
