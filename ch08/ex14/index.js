export function any(...functions) {
  return (...args) => functions.some((func) => func(...args));
}

export function catching(func1, func2) {
  return (...args) => {
    try {
      return func1(...args);
    } catch (e) {
      return func2(e);
    }
  };
}
