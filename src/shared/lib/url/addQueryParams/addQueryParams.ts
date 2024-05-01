export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);
  // eslint-disable-next-line array-callback-return
  Object.entries(params).map(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    }
  });

  return `?${searchParams.toString()}`;
}

export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}
