export function unwritableAndUnconfigurableObj() {
  const o = {};
  Object.defineProperty(o, "a", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false,
  });
  return o;
}

export function writableAndUnconfigurableObj() {
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: false,
  });
  return o;
}

export function nestedUnwritableObj() {
  return Object.freeze({ c: Object.freeze({ d: Object.freeze({ e: 3 }) }) });
}
