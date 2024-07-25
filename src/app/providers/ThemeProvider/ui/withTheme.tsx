import { useJsonSettings } from '@/entities/User';
import { ThemeProvider } from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
  return () => {
    const { theme: initialTheme } = useJsonSettings();
    return (
      <ThemeProvider initialTheme={initialTheme}>
        <Component />
      </ThemeProvider>
    );
  };
};
