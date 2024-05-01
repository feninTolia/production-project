import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
  it('should succeed ', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        limit: 5,
        hasMore: true,
        ids: [],
        entities: {},
        isLoading: false,
      },
    });

    await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
  });
  it('should not call fetchArticlesList if isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        limit: 5,
        hasMore: true,
        ids: [],
        entities: {},
        isLoading: true,
      },
    });

    await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
  it('should not call fetchArticlesList if has no more', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        limit: 5,
        hasMore: false,
        ids: [],
        entities: {},
        isLoading: false,
      },
    });

    await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
