import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { IArticlesView } from '../../model/constants';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

const meta: Meta<typeof ArticleListItemSkeleton> = {
  title: 'entities/Article/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListItemSkeleton>;

export const Light: Story = {
  args: { view: IArticlesView.BIG },
};
export const LightSmall: Story = {
  args: { view: IArticlesView.SMALL },
};

export const Dark: Story = {
  args: { view: IArticlesView.BIG },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const DarkSmall: Story = {
  args: { view: IArticlesView.SMALL },
  decorators: [ThemeDecorator(Theme.DARK)],
};
