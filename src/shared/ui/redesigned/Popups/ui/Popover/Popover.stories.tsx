import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Popover } from './Popover';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

const meta: Meta<typeof Popover> = {
  title: 'shared/redesigned/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {},
  args: { trigger: <button>🐙</button>, children: <h1>HelloWorld</h1> },
  decorators: [
    NewDesignDecorator,
    (Story) => (
      <div style={{ padding: 200, width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: { direction: 'topLeft' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
