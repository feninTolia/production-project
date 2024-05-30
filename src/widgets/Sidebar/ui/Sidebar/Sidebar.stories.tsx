import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [StoreDecorator({ user: { authData: { id: '1212' } } })],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const WithoutAuth: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: {} })],
};
