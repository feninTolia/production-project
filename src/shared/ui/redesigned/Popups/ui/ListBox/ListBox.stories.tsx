import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { ListBox } from './ListBox';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof ListBox> = {
  title: 'shared/redesigned/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  decorators: [
    NewDesignDecorator,
    (Story) => (
      <div style={{ padding: 200, width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
  args: {
    value: 'More',
    items: [
      { value: '1', content: 'oneoneoneone ' },
      { value: '2', content: 'two' },
      { value: '3', content: 'three' },
      { value: '4', content: 'four' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const topRight: Story = {
  args: {
    direction: 'topRight',
  },
};
export const topLeft: Story = {
  args: {
    direction: 'topLeft',
  },
};
export const bottomRight: Story = {
  args: {
    direction: 'bottomRight',
  },
};
export const bottomLeft: Story = {
  args: {
    direction: 'bottomLeft',
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
