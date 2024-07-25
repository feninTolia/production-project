import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/3BodyHotAsianForStory.jpg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const primaryArgs = {
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
};

export const Primary: Story = {
  args: primaryArgs,
};
export const PrimaryRedesigned: Story = {
  args: primaryArgs,
  decorators: [NewDesignDecorator],
};

export const IsLoading: Story = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const Error: Story = {
  args: { error: 'Some error' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
