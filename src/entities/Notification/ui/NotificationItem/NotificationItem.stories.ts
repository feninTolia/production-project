import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    notification: {
      id: '1',
      title: 'Title 1',
      description: 'Some Description',
      userId: '1',
      href: '#',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
