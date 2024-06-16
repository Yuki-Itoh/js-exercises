import * as fsPromises from "node:fs/promises";
import { join } from "node:path";

export function fetchFirstFileSize(path) {
  return fsPromises
    .readdir(path)
    .then((files) => {
      if (files.length === 0) {
        return null;
      } else {
        return fsPromises.stat(join(path, files[0]));
      }
    })
    .then((stats) => (stats ? stats.size : null));
}

export function fetchSumOfFileSizes(path) {
  return fsPromises.readdir(path).then((files) => {
    const promises = files.map((file) => fsPromises.stat(join(path, file)));
    return Promise.all(promises).then((stats) =>
      stats.map((stats) => stats.size).reduce((acc, cur) => acc + cur, 0)
    );
  });
}
