import { cachedSlowFn } from ".";

test("cachedSlowFn", async () => {
  const obj1 = {};
  const obj2 = {};

  // 初回は処理に時間がかかる
  let startTime = performance.now();
  const result1 = await cachedSlowFn(obj1);
  expect(performance.now() - startTime > 1000).toBe(true);

  // 2回目はキャッシュを返すので時間がかからない
  startTime = performance.now();
  expect(await cachedSlowFn(obj1)).toBe(result1);
  expect(performance.now() - startTime < 100).toBe(true);

  // 引数に別オブジェクトを渡すと処理に時間がかかる
  startTime = performance.now();
  expect(await cachedSlowFn(obj2)).not.toBe(result1);
  expect(performance.now() - startTime > 1000).toBe(true);
});
