import { lazy } from 'react';

// ТАК В РЕАЛЬНИХ ПРОЕКТАХ НЕ РОБИТИ!!!!!

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(
        () =>
          //   @ts-expect-error ???
          resolve(import('./AboutPage')),
        1500
      );
    })
);
