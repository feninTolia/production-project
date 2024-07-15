import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';

const meta: Meta<typeof ArticleListItemRedesigned> = {
  title: 'entities/Article/ArticleListItemRedesigned',
  component: ArticleListItemRedesigned,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListItemRedesigned>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
