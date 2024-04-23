import { FC, lazy } from 'react';
import { IAddCommentFormProps } from './AddCommentForm';

// ТАК В РЕАЛЬНИХ ПРОЕКТАХ НЕ РОБИТИ!!!!!

export const AddCommentFormAsync = lazy<FC<IAddCommentFormProps>>(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => resolve(import('./AddCommentForm')), 1500);
    })
);
