import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_USERNAME = 'INCORRECT_USER_USERNAME',
  NO_PROFILE_DATA = 'NO_PROFILE_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface IProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
