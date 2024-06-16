// `fetchSumOfFileSizes` を `Promise.all` を使って書き換え、
// ディレクトリ内のファイルサイズを同時並行で取得するようにしなさい。
// **注意**: `Promise.all` を使う時は注意すること
//  (例えば Web API の呼び出しを並行に実行すると、数次第で何らかのエラーに繋がる可能性がある)

import * as fsPromises from "node:fs/promises";
import { join } from "node:path";

export async function fetchSumOfFileSizes(path) {
  const files = await fsPromises.readdir(path);

  const stats = await Promise.all(
    files.map((file) => fsPromises.stat(join(path, file)))
  );

  let total = 0;
  for (let stat of stats) {
    total += stat.size;
  }
  return total;
}
