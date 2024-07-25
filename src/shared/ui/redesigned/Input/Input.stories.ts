import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Input } from './Input';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Input> = {
  title: 'shared/redesigned/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  args: { placeholder: 'Placeholder' },
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
