import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    trigger: <Button>More</Button>,
    items: [
      { content: 'content1' },
      { content: 'content2' },
      { content: 'content3' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
