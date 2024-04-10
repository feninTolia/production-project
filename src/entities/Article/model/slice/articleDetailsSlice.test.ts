import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { IArticleDetailsSchema } from '../types/article';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice.test', () => {
  it('should pending while fetch article details', () => {
    const state: DeepPartial<IArticleDetailsSchema> = {
      isLoading: false,
    };

    const result = articleDetailsReducer(
      state as IArticleDetailsSchema,
      fetchArticleById.pending
    );
    expect(result).toEqual({
      isLoading: true,
    });
  });
});
