import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    code: "const people = [\n    { name: 'sam', age: 28 },\n    { name: 'alex', age: 28 }\n]\n\nObject.groupBy(people, person => {\n    return person.age\n})\n\nOutput : {\n    '28' : [\n        { name: 'chandra', age: 28 },\n        { name: 'alex', age: 28 }\n    ]\n\n} ",
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
