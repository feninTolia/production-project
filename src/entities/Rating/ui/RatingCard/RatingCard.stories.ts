import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
  title: 'entities/Rating/RatingCard',
  component: RatingCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightRedesigned: Story = {
  args: {},
  decorators: [NewDesignDecorator],
};
