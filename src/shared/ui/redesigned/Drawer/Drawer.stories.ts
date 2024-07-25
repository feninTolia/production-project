import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Drawer } from './Drawer';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Drawer> = {
  title: 'shared/redesigned/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
