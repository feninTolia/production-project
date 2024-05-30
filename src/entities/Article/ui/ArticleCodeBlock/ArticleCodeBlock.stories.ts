import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleCodeBlock } from './ArticleCodeBlock';
import { Theme } from '@/shared/constants/theme';

const meta: Meta<typeof ArticleCodeBlock> = {
  title: 'entities/Article/ArticleCodeBlock',
  component: ArticleCodeBlock,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlock>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
