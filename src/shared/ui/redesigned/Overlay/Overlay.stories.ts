import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Overlay } from './Overlay';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Overlay> = {
  title: 'shared/redesigned/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
