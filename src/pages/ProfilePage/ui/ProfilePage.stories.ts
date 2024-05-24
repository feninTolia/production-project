import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        readonly: true,
        form: {
          username: 'admin111',
          age: 25,
          country: Country.Ukraine,
          lastname: 'test',
          firstname: 'asd',
          city: 'asf',
          currency: Currency.USD,
        },
        data: {
          username: 'admin111',
          age: 25,
          country: Country.Ukraine,
          lastname: 'test',
          firstname: 'asd',
          city: 'asf',
          currency: Currency.USD,
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
