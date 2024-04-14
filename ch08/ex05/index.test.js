import { sequenceToObject } from ".";

test("sequenceToObject", () => {
  // 基本系
  expect(sequenceToObject("a", 1, "b", 2)).toStrictEqual({ a: 1, b: 2 });
  expect(sequenceToObject(...["a", 1, "b", 2])).toStrictEqual({ a: 1, b: 2 });

  // 例外系
  expect(() => {
    // 奇数番がstringではない場合はError
    sequenceToObject(1, 2);
  }).toThrow();
  expect(() => {
    // 引数の数が偶数ではない場合はError
    sequenceToObject("a", 1, "b");
  }).toThrow();
});
