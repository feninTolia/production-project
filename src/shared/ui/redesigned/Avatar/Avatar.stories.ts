import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/3BodyHotAsianForStory.jpg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Avatar> = {
  title: 'shared/redesigned/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
  args: { alt: 'alt', src: AvatarImg },
  decorators: [NewDesignDecorator],
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
