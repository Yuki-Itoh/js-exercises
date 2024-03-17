import { assign } from ".";

test.each([
  [{ x: 1 }, { y: 2, z: 3 }],
  [{ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }],
])(`assign(%p, %p, %p)`, (target, ...sources) => {
  const copy = Object.assign({}, target);
  expect(assign(target, ...sources)).toStrictEqual(
    Object.assign(copy, ...sources)
  );
});
