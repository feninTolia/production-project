import { lazy } from 'react';

// ТАК В РЕАЛЬНИХ ПРОЕКТАХ НЕ РОБИТИ!!!!!

export const LoginFormAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        //   @ts-expect-error sss
        resolve(import('./LoginForm'));
      }, 1500);
    })
);
