/**
 * P.367のジェネレータ
 */
export function* fibonacciSequenceGenerator() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}

/**
 * P.367のジェネレータと同等のイテレータ
 */
export function fibonacciSequenceIterator() {
  let [x, y] = [0, 1];
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      for (;;) {
        const v = y;
        [x, y] = [y, x + y];
        return { value: v, done: false };
      }
    },
  };
}
