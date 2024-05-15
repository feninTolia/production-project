import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { mockArticle } from 'shared/constants/mock';
import { IArticlesView } from '../../model/constants';
import { ArticleListItem } from './ArticleListItem';

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
