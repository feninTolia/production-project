import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { ArticlePageGreeting } from './ArticlePageGreeting';

const meta: Meta<typeof ArticlePageGreeting> = {
  title: 'features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticlePageGreeting>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
