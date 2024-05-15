import { UserRole } from '../constants';

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface IUserSchema {
  authData?: IUser;
  _isMounted: boolean;
}
