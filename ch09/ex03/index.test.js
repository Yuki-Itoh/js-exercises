import { C, C2 } from ".";

test("C", () => {
  const c = new C();
  expect(c.x).toBe(undefined); //外部から直接`x`にアクセスできない
  expect(c.getX()).toBe(42);
});

test("C2", () => {
  const c = new C2();
  expect(c.x).toBe(undefined); //外部から直接`x`にアクセスできない
  expect(c.getX()).toBe(42);
});
