import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleCodeBlock } from './ArticleCodeBlock';
import { Theme } from '@/shared/constants/theme';

const meta: Meta<typeof ArticleCodeBlock> = {
  title: 'entities/Article/ArticleCodeBlock',
  component: ArticleCodeBlock,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    code: "const people = [\n    { name: 'sam', age: 28 },\n    { name: 'alex', age: 28 }\n]\n\nObject.groupBy(people, person => {\n    return person.age\n})\n\nOutput : {\n    '28' : [\n        { name: 'chandra', age: 28 },\n        { name: 'alex', age: 28 }\n    ]\n\n}",
  },
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
