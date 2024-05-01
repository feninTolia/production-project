import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
  it('should succeed ', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        limit: 5,
        hasMore: true,
        ids: [],
        entities: {},
        isLoading: false,
        _inited: false,
      },
    });

    await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
  });
  it('should not call fetchArticlesList if inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        limit: 5,
        hasMore: true,
        ids: [],
        entities: {},
        isLoading: true,
        _inited: true,
      },
    });

    await thunk.callThunk(undefined);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
