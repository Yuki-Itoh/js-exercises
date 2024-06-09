import { counterGenerator } from ".";

test("counter reset", () => {
  const gen = counterGenerator();

  let count = 0;

  // next()でインクリメントされる
  for (let i = 0; i < 10; i++) {
    expect(gen.next().value).toEqual(++count);
  }

  count = 0;
  // throw()でリセットされる
  expect(gen.throw(new Error()).value).toEqual(++count);
});
