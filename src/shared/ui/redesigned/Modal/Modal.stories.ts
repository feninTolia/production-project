import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Modal } from './Modal';
import { fn } from '@storybook/test';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Modal> = {
  title: 'shared/redesigned/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    isOpen: true,
    onClose: fn(),
    children:
      'Lorem ipsum dolor sit consectetur, provident e libero quia o. Lore ipsum dolor sit consectetur, provident e libero quia o. Lorem ipsum dolor sit consectetur, provident e libero quia o. Lorem ipsum dolor sit consectetur, provident e libero quia o.',
  },
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: { isOpen: true },
};

export const Dark: Story = {
  args: { isOpen: true },
  decorators: [ThemeDecorator(Theme.DARK)],
};
