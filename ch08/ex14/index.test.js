import { any, catching } from ".";

test("any", () => {
  const isNonZero = any(
    (n) => n > 0,
    (n) => n < 0
  );

  expect(isNonZero(0)).toBeFalsy();
  expect(isNonZero(42)).toBeTruthy();
  expect(isNonZero(-0.5)).toBeTruthy();
});

test("catching", () => {
  const safeJsonParse = catching(JSON.parse, (e) => {
    return { error: e.toString() };
  });

  expect(safeJsonParse('{"a": 1}')).toStrictEqual({ a: 1 });
  expect(safeJsonParse("{Invalid Json}")).toStrictEqual({
    error: "SyntaxError: Unexpected token I in JSON at position 1",
  });
});
