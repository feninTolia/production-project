import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    options: [
      { value: 'abc', content: 'abc' },
      { value: 'abc1', content: 'abc1' },
      { value: 'abc2', content: 'abc2' },
      { value: 'abc3', content: 'abc3' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = {
  args: {},
};
export const WithLabel: Story = {
  args: { label: 'Some label' },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
