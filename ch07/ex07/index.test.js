import { quickSort, sort } from ".";

test("quickSort", () => {
  // ランダムな100個の数字からなる配列を用意する
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.random());
  }

  expect(quickSort(array)).toStrictEqual(sort(array));
});
