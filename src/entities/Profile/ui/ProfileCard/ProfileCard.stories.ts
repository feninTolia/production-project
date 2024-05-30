import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/3BodyHotAsianForStory.jpg';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: 'admin111',
      age: 22,
      country: Country.Ukraine,
      lastname: 'test',
      firstname: 'asd',
      city: 'asf',
      currency: Currency.USD,
      avatar: AvatarImg,
    },
  },
};

export const IsLoading: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Error: Story = {
  args: { error: 'Some error' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
