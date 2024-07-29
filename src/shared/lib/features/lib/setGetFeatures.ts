import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/constants/localStorage';
import { IFeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatures: IFeatureFlags = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY)
    ? localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new'
    : true,
};

let featureFlags: IFeatureFlags = { ...defaultFeatures };

export const setFeatureFlags = (newFeatureFlags?: IFeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};
export const getFeatureFlag = (flag: keyof IFeatureFlags) => {
  return featureFlags?.[flag];
};
export const getAllFeatureFlags = () => {
  return featureFlags;
};
