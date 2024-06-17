import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';
import { Theme } from '@/shared/constants/theme';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
