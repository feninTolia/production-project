import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    comment: {
      id: '2',
      text: 'Some text',
      user: {
        id: '1',
        username: 'Tolik',
        avatar:
          'https://media.licdn.com/dms/image/D4D03AQHdxl-rZGHKdQ/profile-displayphoto-shrink_800_800/0/1664564414402?e=1718236800&v=beta&t=EnEc6ilJF3_1AmjEnxwGcBGo3rzITChZKHOHBKJzofI',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsLoading: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.DARK)],
};
