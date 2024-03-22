import { FC, useEffect, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;
interface IThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeProvider: FC<IThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    document.body.className = defaultTheme;
  }, []);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
