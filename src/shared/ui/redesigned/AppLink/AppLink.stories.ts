import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { AppLink } from './AppLink';
import { fn } from '@storybook/test';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof AppLink> = {
  title: 'shared/redesigned/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'test Link',
    to: '/',
  },
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    onClick: fn(),
    variant: 'primary',
  },
};
export const Inverted: Story = {
  args: {
    onClick: fn(),
    variant: 'red',
  },
};

export const PrimaryDark: Story = {
  args: { variant: 'primary' },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedDark: Story = {
  args: { variant: 'red' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
