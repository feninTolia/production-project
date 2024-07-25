import { setFeatureFlags } from '@/shared/lib/features';
import { IFeatureFlags } from '@/shared/types/featureFlags';
import { StoryFn } from '@storybook/react';

export const FeatureFlagsDecorator =
  (features: IFeatureFlags) => (Story: StoryFn) => {
    setFeatureFlags(features);

    return (
      // <body className={`app ${theme}`}>
      <Story />
      // </body>
    );
  };
