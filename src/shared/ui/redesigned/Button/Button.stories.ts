import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Button> = {
  title: 'shared/redesigned/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
  },
};

export const Clear: Story = {
  args: {
    children: 'Button',
    variant: 'clear',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const OutlineSquaredM: Story = {
  args: {
    children: '>',
    variant: 'outline',
    size: 'm',
    squared: true,
  },
};
export const OutlineSquaredL: Story = {
  args: {
    children: '>',
    variant: 'outline',
    size: 'l',
    squared: true,
  },
};
export const OutlineSquaredXL: Story = {
  args: {
    children: '>',
    variant: 'outline',
    size: 'xl',
    squared: true,
  },
};
export const DisabledOutlineSquaredXL: Story = {
  args: {
    children: '>',
    variant: 'outline',
    size: 'xl',
    squared: true,
    disabled: true,
  },
};
