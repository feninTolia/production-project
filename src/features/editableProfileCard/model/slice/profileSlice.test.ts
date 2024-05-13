import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import {
  IProfileSchema,
  ValidateProfileError,
} from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
  it('should set readonly to false', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: true };
    const result = profileReducer(
      state as IProfileSchema,
      profileActions.setReadonly(false)
    );
    expect(result).toEqual({ readonly: false });
  });
  it('should update profile', () => {
    const state: DeepPartial<IProfileSchema> = { form: { username: 'Tolik' } };
    const result = profileReducer(
      state as IProfileSchema,
      profileActions.updateProfile({ username: 'Lox' })
    );
    expect(result).toEqual({ form: { username: 'Lox' } });
  });

  it('should pending while update profile', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_USER_USERNAME],
    };

    const result = profileReducer(
      state as IProfileSchema,
      updateProfileData.pending
    );
    expect(result).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });
});
