import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Text> = {
  title: 'shared/redesigned/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [NewDesignDecorator],
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
    variant: 'error',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeS: Story = {
  args: { title: 'Lorem ipsum S ', text: 'Some description', size: 's' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SizeM: Story = {
  args: { title: 'Lorem ipsum M', text: 'Some description', size: 'm' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SizeL: Story = {
  args: { title: 'Lorem ipsum L', text: 'Some description', size: 'l' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
