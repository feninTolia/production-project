import { IStateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../constants';

describe('getProfileValidateErrors.test', () => {
  it('should return profile validation errors', () => {
    const validationsErrors: ValidateProfileError[] = [
      ValidateProfileError.INCORRECT_USER_AGE,
    ];

    const state: DeepPartial<IStateSchema> = {
      profile: {
        validateErrors: validationsErrors,
      },
    };
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(
      validationsErrors
    );
  });

  it('should return profile multiple form validation errors', () => {
    const validationsErrors: ValidateProfileError[] = [
      ValidateProfileError.INCORRECT_USER_AGE,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_USERNAME,
    ];

    const state: DeepPartial<IStateSchema> = {
      profile: {
        validateErrors: validationsErrors,
      },
    };
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(
      validationsErrors
    );
  });

  it('should work with zero errors ', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: { validateErrors: [] },
    };
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual([]);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual(undefined);
  });
});
