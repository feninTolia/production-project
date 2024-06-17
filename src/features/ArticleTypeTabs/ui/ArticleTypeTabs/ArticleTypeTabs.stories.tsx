import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { Theme } from '@/shared/constants/theme';

const meta: Meta<typeof ArticleTypeTabs> = {
  title: 'features/ArticleTypeTabs',
  component: ArticleTypeTabs,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
