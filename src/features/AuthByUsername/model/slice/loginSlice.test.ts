import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { ILoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
  it('should set username as ABCABC', () => {
    const state: DeepPartial<ILoginSchema> = { username: 'ABC' };
    const result = loginReducer(
      state as ILoginSchema,
      loginActions.setUsername('ABCABC')
    );
    expect(result).toEqual({ username: 'ABCABC' });
  });
  it('should set password as ABCABC', () => {
    const state: DeepPartial<ILoginSchema> = { password: 'ABC' };
    const result = loginReducer(
      state as ILoginSchema,
      loginActions.setPassword('ABCABC')
    );
    expect(result).toEqual({ password: 'ABCABC' });
  });
});
