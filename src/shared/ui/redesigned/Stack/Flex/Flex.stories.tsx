import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Flex } from './Flex';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Flex> = {
  title: 'shared/redesigned/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [NewDesignDecorator],
  args: {
    children: (
      <>
        <span>Some</span>
        <span>Some</span>
        <span>Some</span>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: { direction: 'row' },
};
export const RowGap4: Story = {
  args: { direction: 'row', gap: '4' },
};
export const RowGap16: Story = {
  args: { direction: 'row', gap: '16' },
};
export const RowGap32: Story = {
  args: { direction: 'row', gap: '32' },
};

export const Column: Story = {
  args: { direction: 'column' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const ColumnGap16: Story = {
  args: { direction: 'column', gap: '16' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const ColumnAlignedStart: Story = {
  args: { direction: 'column', align: 'start' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
