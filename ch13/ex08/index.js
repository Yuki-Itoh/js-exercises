// `fetchFirstFileSize` および `fetchSumOfFileSizes` を
//  async/await を使って書き直しなさい。

import * as fsPromises from "node:fs/promises";
import { join } from "node:path";

export async function fetchFirstFileSize(path) {
  const files = await fsPromises.readdir(path);
  if (files.length === 0) {
    return null;
  }

  const stat = await fsPromises.stat(join(path, files[0]));
  return stat.size;
}

export async function fetchSumOfFileSizes(path) {
  const files = await fsPromises.readdir(path);

  let total = 0;
  for (let file of files) {
    const stat = await fsPromises.stat(join(path, file));
    total += stat.size;
  }
  return total;
}
