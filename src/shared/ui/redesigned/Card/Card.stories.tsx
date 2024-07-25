import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Card } from './Card';
import { Text } from '../Text/Text';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Card> = {
  title: 'shared/redesigned/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: { children: <Text text="Text" title="Title" /> },
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
