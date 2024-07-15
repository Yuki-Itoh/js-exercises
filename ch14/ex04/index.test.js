import { Hiragana } from ".";

test("Hiragana", () => {
  const a = new Hiragana("あ");
  const i = new Hiragana("い");
  const u = new Hiragana("う");
  const e = new Hiragana("え");
  const o = new Hiragana("お");
  const array = [u, a, i, o, e];
  // 数値
  expect(array.sort((a, b) => a - b)).toStrictEqual([a, i, u, e, o]);
  // 文字列
  expect(`${a}${i}${u}${e}${o}`).toEqual("あいうえお");
  // デフォルト
  expect(a + i + u + e + o).toEqual("あいうえお");
});
