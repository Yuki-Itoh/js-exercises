import { readdir, stat } from ".";

const pathA = "./ch13/ex03/A";
const pathB = "./ch13/ex03/B";
const pathC = "./ch13/ex03/C";

test("readdir", async () => {
  expect(readdir(pathA)).resolves.toStrictEqual(["file1.js", "file2.js"]);
});

test("stat", async () => {
  expect(
    stat(pathA)
      .then(() => stat(pathB))
      .then(() => stat(pathC))
  ).resolves.toHaveProperty("dev"); // Statsのプロパティの一部を持っていることを確認する
});
