import { obj } from ".";

test("アクセサプロパティ", () => {
  obj.x = 1;
  obj.y = 2;

  expect(obj.x).toBe(1);
  expect(obj.y).toBe(2);

  // 例外系
  expect(() => {obj.x = NaN}).toThrow()
  expect(() => {obj.y = NaN}).toThrow()
});
