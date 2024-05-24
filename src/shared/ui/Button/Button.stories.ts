import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

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

export const ClearInverted: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
  },
};
export const OutlinedSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.L,
  },
};
export const OutlinedSizeXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.XL,
  },
};

export const OutlinedDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Background: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundSquaredM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
    squared: true,
  },
};
export const BackgroundSquaredL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
    squared: true,
  },
};
export const BackgroundSquaredXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
    squared: true,
  },
};

export const BackgroundSquaredDisabledXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
    squared: true,
    disabled: true,
  },
};
