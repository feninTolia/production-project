import { IProfile } from '@/entities/Profile';
import { ValidateProfileError } from '../../constants';

export const validateProfileData = (profile?: IProfile) => {
  const errors: ValidateProfileError[] = [];

  if (!profile) {
    return [ValidateProfileError.NO_PROFILE_DATA];
  }

  const { firstname, lastname, age, username } = profile;

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }
  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_USER_AGE);
  }
  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USER_USERNAME);
  }

  return errors;
};
