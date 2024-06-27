import { IFeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: IFeatureFlags;

export const setFeatureFlags = (newFeatureFlags?: IFeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};
export const getFeatureFlags = (flag: keyof IFeatureFlags) => {
  return featureFlags?.[flag];
};
