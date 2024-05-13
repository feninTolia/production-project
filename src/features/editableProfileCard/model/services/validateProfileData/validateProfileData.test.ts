import { validateProfileData } from './validateProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

jest.mock('axios');

describe('validateProfileData.test', () => {
  const profile = {
    username: 'admin111',
    age: 25,
    country: Country.Ukraine,
    lastname: 'test',
    firstname: 'test',
    city: 'asf',
    currency: Currency.USD,
  };

  it('should return no errors ', async () => {
    const errors = validateProfileData({ ...profile });
    expect(errors).toEqual([]);
  });

  it('should return firstname error ', async () => {
    const errors = validateProfileData({ ...profile, firstname: '' });
    expect(errors).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  it('should return age error ', async () => {
    const errors = validateProfileData({ ...profile, age: 0 });
    expect(errors).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
  });

  it('should return all errors ', async () => {
    const errors = validateProfileData({
      ...profile,
      age: 0,
      firstname: '',
      username: '',
    });
    expect(errors).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_AGE,
      ValidateProfileError.INCORRECT_USER_USERNAME,
    ]);
  });
});
