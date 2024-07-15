import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

const meta: Meta<typeof ArticleListItemDeprecated> = {
  title: 'entities/Article/ArticleListItemDeprecated',
  component: ArticleListItemDeprecated,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListItemDeprecated>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
