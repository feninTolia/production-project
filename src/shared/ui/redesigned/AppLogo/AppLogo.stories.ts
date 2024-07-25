import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { AppLogo } from './AppLogo';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof AppLogo> = {
  title: 'shared/redesigned/AppLogo',
  component: AppLogo,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof AppLogo>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
