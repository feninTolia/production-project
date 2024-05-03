import { lazy } from 'react';

// ТАК В РЕАЛЬНИХ ПРОЕКТАХ НЕ РОБИТИ!!!!!

export const ArticleEditPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(
        () =>
          //   @ts-expect-error ???
          resolve(import('./ArticleEditPage')),
        400
      );
    })
);
