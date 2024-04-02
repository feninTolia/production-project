import { lazy } from 'react';

// ТАК В РЕАЛЬНИХ ПРОЕКТАХ НЕ РОБИТИ!!!!!

export const ProfilePageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        //   @ts-expect-error ???
        resolve(import('./ProfilePage'));
      }, 400);
    })
);
