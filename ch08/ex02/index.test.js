import { powByLoop, powByRecursive } from ".";

test.each([
  { base: 0, exponent: 0 },
  { base: 0, exponent: 1 },
  { base: 3, exponent: 0 },
  { base: 3, exponent: 1 },
  { base: 3, exponent: 3 },
])("pow", ({ base, exponent }) => {
  const expected = base ** exponent;
  expect(powByRecursive(base, exponent)).toBe(expected);
  expect(powByLoop(base, exponent)).toBe(expected);
});
