import * as fsPromises from "node:fs/promises";

export async function* walk(rootPath) {
  const stats = await fsPromises.stat(rootPath);
  const isDirectory = stats.isDirectory();
  yield { path: rootPath, isDirectory: isDirectory };

  if (isDirectory) {
    const filenames = await fsPromises.readdir(rootPath);
    for (const filename of filenames) {
      yield* walk(rootPath + "/" + filename);
    }
  }
}
