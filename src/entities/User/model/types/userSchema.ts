import { IFeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../constants';

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: IFeatureFlags;
}

export interface IUserSchema {
  authData?: IUser;
  _isMounted: boolean;
}
