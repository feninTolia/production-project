import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from './MainLayout';

const meta: Meta<typeof MainLayout> = {
  title: 'layouts/MainLayout',
  component: MainLayout,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
