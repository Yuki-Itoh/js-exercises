import fs from "fs";

export function* walk(rootPath) {
  const stats = fs.statSync(rootPath);
  const isDirectory = stats.isDirectory();
  yield { path: rootPath, isDirectory: isDirectory };

  if (isDirectory) {
    const filenames = fs.readdirSync(rootPath);
    for (const filename of filenames) {
      yield* walk(rootPath + "/" + filename);
    }
  }
}
