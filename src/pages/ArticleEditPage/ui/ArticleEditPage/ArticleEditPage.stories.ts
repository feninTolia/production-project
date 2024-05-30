import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/constants/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
