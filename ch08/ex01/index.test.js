import { f, g, h } from ".";

test.each([
  { n: 5, c: "c", expected: ["c", "c", "c", "c", "c"] },
  { n: 0, c: "c", expected: [] },
])("f", ({ n, c, expected }) => {
  expect(f(n, c)).toStrictEqual(expected);
});

test.each([0, 1, 2, 10])("g", (x) => {
  expect(g(x)).toStrictEqual(Math.pow(x, 2));
});

test("h", () => {
  expect(h()).toStrictEqual({ now: new Date().getTime() });
});
