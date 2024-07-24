import { useJsonSettings } from '@/entities/User';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/localStorage';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { ReactNode, useEffect, useMemo, useState } from 'react';

interface IThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider = (props: IThemeProviderProps) => {
  const { children, initialTheme } = props;
  const { theme: settingsTheme } = useJsonSettings();
  const [isThemeInited, setThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme ?? fallbackTheme ?? Theme.LIGHT
  );

  useEffect(() => {
    if (!isThemeInited && settingsTheme) {
      setTheme(settingsTheme);
      setThemeInited(true);
    }
  }, [settingsTheme, isThemeInited]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
