import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: 200, width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
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
export const TopLeft: Story = {
  args: { direction: 'topLeft' },
};
export const TopRight: Story = {
  args: { direction: 'topRight' },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
