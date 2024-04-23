import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    comments: [
      {
        id: '2',
        text: 'Some text',
        user: {
          id: '1',
          username: 'Tolik',
          avatar:
            'https://media.licdn.com/dms/image/D4D03AQHdxl-rZGHKdQ/profile-displayphoto-shrink_800_800/0/1664564414402?e=1718236800&v=beta&t=EnEc6ilJF3_1AmjEnxwGcBGo3rzITChZKHOHBKJzofI',
        },
      },
      {
        id: '2',
        text: 'Some text',
        user: {
          id: '1',
          username: 'Tolik',
          avatar:
            'https://media.licdn.com/dms/image/D4D03AQHdxl-rZGHKdQ/profile-displayphoto-shrink_800_800/0/1664564414402?e=1718236800&v=beta&t=EnEc6ilJF3_1AmjEnxwGcBGo3rzITChZKHOHBKJzofI',
        },
      },
      {
        id: '2',
        text: 'Some text',
        user: {
          id: '1',
          username: 'Tolik',
          avatar:
            'https://media.licdn.com/dms/image/D4D03AQHdxl-rZGHKdQ/profile-displayphoto-shrink_800_800/0/1664564414402?e=1718236800&v=beta&t=EnEc6ilJF3_1AmjEnxwGcBGo3rzITChZKHOHBKJzofI',
        },
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsLoading: Story = {
  args: { isLoading: true, comments: undefined },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const NoComments: Story = {
  args: { comments: undefined },
  decorators: [ThemeDecorator(Theme.DARK)],
};
