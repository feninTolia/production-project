import { lazy } from 'react';

// ТАК В РЕАЛЬНИХ ПРОЕКТАХ НЕ РОБИТИ!!!!!

export const LoginFormAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // @ts-expect-error ???
      setTimeout(() => resolve(import('./LoginForm')), 400);
    })
);
