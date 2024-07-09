import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Text, TextSize, TextVariant } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
  args: { title: 'Lorem ipsum ', text: 'Some description' },
};

export const Dark: Story = {
  args: { title: 'Lorem ipsum ', text: 'Some description' },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
  args: { title: 'Lorem ipsum ' },
};
export const OnlyText: Story = {
  args: { text: 'Desc Lorem ipsum ' },
};

export const Error: Story = {
  args: {
    title: 'Lorem ipsum ',
    text: 'Some description',
    variant: TextVariant.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeS: Story = {
  args: { title: 'Lorem ipsum S ', text: 'Some description', size: TextSize.S },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SizeM: Story = {
  args: { title: 'Lorem ipsum M', text: 'Some description', size: TextSize.M },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SizeL: Story = {
  args: { title: 'Lorem ipsum L', text: 'Some description', size: TextSize.L },
  decorators: [ThemeDecorator(Theme.DARK)],
};
