import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: 'test', password: '123', isLoading: false },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsLoading: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: { username: 'test', password: '123', isLoading: true },
    }),
  ],
};

export const IsError: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: {
        username: 'test',
        password: '123',
        error: 'Some error',
        isLoading: false,
      },
    }),
  ],
};
