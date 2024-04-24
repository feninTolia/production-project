import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleListItem } from './ArticleListItem';
import { mockArticle } from 'shared/constants/mock';
import { IArticlesView } from 'entities/Article/model/types/article';

const meta: Meta<typeof ArticleListItem> = {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  tags: ['autodocs'],
  argTypes: {},
  args: { article: mockArticle },
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const LightBig: Story = {
  args: { view: IArticlesView.BIG },
};

export const DarkSmall: Story = {
  args: { view: IArticlesView.SMALL },
  decorators: [ThemeDecorator(Theme.DARK)],
};
