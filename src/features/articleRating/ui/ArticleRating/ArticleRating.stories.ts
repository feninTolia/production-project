import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [StoreDecorator({ user: { authData: { id: '1' } } })],
  parameters: {
    mockData: [
      {
        url: __API__ + '/article-ratings?userId=1&articleId=1',
        method: 'GET',
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
  args: { articleId: '1' },
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const PinkWithoutRate: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.PINK)],
  parameters: { mockData: [] },
};
