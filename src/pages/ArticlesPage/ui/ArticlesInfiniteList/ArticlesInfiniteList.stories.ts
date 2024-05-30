import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

const meta: Meta<typeof ArticlesInfiniteList> = {
  title: 'pages/ArticlesPage/ArticlesInfiniteList',
  component: ArticlesInfiniteList,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesInfiniteList>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
