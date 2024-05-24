import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/3BodyHotAsianForStory.jpg';
const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
  args: { alt: 'alt', src: AvatarImg },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Small: Story = {
  args: { size: '30px' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
