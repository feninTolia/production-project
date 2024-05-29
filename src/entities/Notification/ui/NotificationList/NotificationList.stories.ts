import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    mockData: [
      {
        url: __API__ + '/notifications',
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'Title 1',
            description: 'Some Description',
            userId: '1',
            href: '#',
          },
          {
            id: '2',
            title: 'Title 2',
            description: 'Some Other Description',
            userId: '1',
          },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
