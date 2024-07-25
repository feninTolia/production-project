import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Skeleton } from './Skeleton';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/redesigned/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
  args: {},
};
export const Circle: Story = {
  args: { borderRadius: '50%' },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
