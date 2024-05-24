import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { mockArticle } from '@/shared/constants/mock';

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [StoreDecorator({ articleDetails: { data: mockArticle } })],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Pink: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.PINK)],
};

export const Loading: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.PINK),
    StoreDecorator({ articleDetails: { isLoading: true } }),
  ],
};
export const ErrorPink: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.PINK),
    StoreDecorator({ articleDetails: { error: 'true' } }),
  ],
};

export const ErrorDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ articleDetails: { error: 'true' } }),
  ],
};
