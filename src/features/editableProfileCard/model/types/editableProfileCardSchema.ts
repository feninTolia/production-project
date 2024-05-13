import { IProfile } from 'entities/Profile';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_USERNAME = 'INCORRECT_USER_USERNAME',
  NO_PROFILE_DATA = 'NO_PROFILE_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
