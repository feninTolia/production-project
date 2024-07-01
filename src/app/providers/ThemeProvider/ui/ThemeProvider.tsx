import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { ReactNode, useEffect, useMemo, useState } from 'react';

interface IThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = (props: IThemeProviderProps) => {
  const { children, initialTheme } = props;
  const { theme: settingsTheme } = useJsonSettings();
  const [isThemeInited, setThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme ?? settingsTheme ?? Theme.LIGHT
  );

  useEffect(() => {
    if (!isThemeInited && settingsTheme) {
      setTheme(settingsTheme);
      setThemeInited(true);
    }
  }, [settingsTheme, isThemeInited]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
