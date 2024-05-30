import { Theme } from '@/shared/constants/theme';
import { createContext } from 'react';

export interface IThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
