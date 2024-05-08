import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { mockArticle } from 'shared/constants/mock';
import { IArticlesView } from '../../model/types/article';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    articles: [mockArticle, mockArticle, mockArticle, mockArticle],
  },
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const LightSmall: Story = {
  args: {},
};
export const LightBig: Story = {
  args: { view: IArticlesView.BIG },
};

export const DarkSmall: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const DarkBig: Story = {
  args: { view: IArticlesView.BIG },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsLoadingSmall: Story = {
  args: { articles: [], isLoading: true, view: IArticlesView.SMALL },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsLoadingBig: Story = {
  args: { articles: [], isLoading: true, view: IArticlesView.BIG },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
