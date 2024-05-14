export function modifyUrl(obj) {
  const url = new URL(obj.base);

  if (obj.path) {
    url.pathname = obj.path;
  }

  obj.addQuery?.forEach((query) => {
    url.searchParams.set(query[0], query[1]);
  });

  return url.href;
}
