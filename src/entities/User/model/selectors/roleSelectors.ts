import { createSelector } from '@reduxjs/toolkit';
import { IStateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../constants';

export const getUserRoles = (state: IStateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN))
);

export const isUserManager = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.MANAGER))
);
