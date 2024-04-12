export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  role?: string;
}

export interface IUserSchema {
  authData?: IUser;
  _isMounted: boolean;
}
