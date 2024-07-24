import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { AppLoaderLayout } from './AppLoaderLayout';

const meta: Meta<typeof AppLoaderLayout> = {
  title: 'layouts/AppLoaderLayout',
  component: AppLoaderLayout,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof AppLoaderLayout>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
