import { StoryFn } from '@storybook/react';
// eslint-disable-next-line ftoe-plugin/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (Story: StoryFn) => (
  <>
    <Story />
  </>
);
