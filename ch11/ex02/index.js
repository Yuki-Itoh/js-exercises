// f はオブジェクトを1つ引数に取る関数
async function cache(f) {
  const weakMap = new WeakMap();

  return async function (obj) {
    if (typeof obj !== "object") {
      throw Error(`${obj} is not object.`);
    }

    if (weakMap.has(obj)) {
      return weakMap.get(obj);
    }

    const result = await f(obj);
    weakMap.set(obj, result);
    return result;
  };
}

async function slowFn(obj) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Math.random();
}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
export const cachedSlowFn = await cache(slowFn);
