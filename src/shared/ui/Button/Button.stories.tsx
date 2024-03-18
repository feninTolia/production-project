import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
  },
};

export const OutlinedDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
