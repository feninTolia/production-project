import { IStateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './articleDetailsSelectors';

describe('articleDetailsSelectors.test', () => {
  it('should return article data', () => {
    const article = {
      id: '1',
      title: 'Title Some',
    };

    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        data: article,
      },
    };
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(article);
  });
  it('should get data with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsData(state as IStateSchema)).toEqual(undefined);
  });

  it('should return article isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(true);
  });
  it('should get isLoading with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(
      undefined
    );
  });

  it('should return article error', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        error: 'Error some',
      },
    };
    expect(getArticleDetailsError(state as IStateSchema)).toEqual('Error some');
  });
  it('should get error with empty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleDetailsError(state as IStateSchema)).toEqual(undefined);
  });
});
