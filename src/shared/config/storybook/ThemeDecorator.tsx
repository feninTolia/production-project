// eslint-disable-next-line ftoe-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/constants/theme';
import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <body className={`app ${theme}`}>
        <Story />
      </body>
    </ThemeProvider>
  );
};
