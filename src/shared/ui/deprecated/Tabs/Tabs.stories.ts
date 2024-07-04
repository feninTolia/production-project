import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    tabs: [
      { value: 'ALL', content: 'ALL' },
      { value: 'tab2', content: 'Tab2' },
      { value: 'tab3', content: 'Tab3' },
    ],
    value: 'ALL',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
