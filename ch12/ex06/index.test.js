import { walk } from ".";

test("walk", () => {
  const expectedObjects = [
    { path: "./ch12/ex06", isDirectory: true },
    { path: "./ch12/ex06/dir", isDirectory: true },
    { path: "./ch12/ex06/dir/file.js", isDirectory: false },
    { path: "./ch12/ex06/index.js", isDirectory: false },
    { path: "./ch12/ex06/index.test.js", isDirectory: false },
  ];

  const gen = walk("./ch12/ex06");

  let count = 0;
  for (const obj of gen) {
    expect(obj).toStrictEqual(expectedObjects[count++]);
  }
});
