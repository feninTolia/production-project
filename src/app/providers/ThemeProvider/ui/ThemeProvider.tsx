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
  const { theme: settingsTheme = Theme.DARK } = useJsonSettings();
  const [isThemeInited, setThemeInited] = useState(false);

  console.log(settingsTheme);

  const [theme, setTheme] = useState<Theme>(initialTheme ?? settingsTheme);

  useEffect(() => {
    setTheme(settingsTheme);
  }, [settingsTheme]); // !Check

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
