import { IFeatureFlags } from '@/shared/types/featureFlags';
import { ReactElement } from 'react';
import { getFeatureFlag } from '../setGetFeatures';

interface ITogleFeatureProps {
  feature: keyof IFeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = (props: ITogleFeatureProps) => {
  const { feature, off, on } = props;
  if (getFeatureFlag(feature)) {
    return on;
  }

  return off;
};
