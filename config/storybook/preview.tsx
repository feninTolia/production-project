import { Theme } from '@/shared/constants/theme';
import { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({}),
    RouterDecorator,
    SuspenseDecorator,
  ],
};

export default preview;
