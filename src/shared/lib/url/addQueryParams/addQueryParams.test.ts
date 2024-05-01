import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  it('should return one param', () => {
    const params = getQueryParams({ sort: 'asc' });

    expect(params).toBe('?sort=asc');
  });
  it('should return two param', () => {
    const params = getQueryParams({ sort: 'asc', _q: '9y' });

    expect(params).toBe('?sort=asc&_q=9y');
  });
  it('should work with undefined', () => {
    const params = getQueryParams({ sort: 'asc', _q: undefined });

    expect(params).toBe('?sort=asc');
  });
});
