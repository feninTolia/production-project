import { createSelector } from '@reduxjs/toolkit';
import { IStateSchema } from '@/app/providers/StoreProvider';

export const getScrollSaveScroll = (state: IStateSchema) =>
  state.scrollSave.scroll;

export const getScrollSaveScrollByPath = createSelector(
  getScrollSaveScroll,
  (_: IStateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
