import { lazy } from 'react';

// ТАК В РЕАЛЬНИХ ПРОЕКТАХ НЕ РОБИТИ!!!!!

export const ArticleDetailsPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(
        () =>
          //   @ts-expect-error ???
          resolve(import('./ArticleDetailsPage')),
        400
      );
    })
);
