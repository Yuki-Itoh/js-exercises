import { readLines } from ".";

test("readLines", () => {
  const expectedLines = [
    "こころ",
    "夏目漱石",
    "-------------------------------------------------------",
    "【テキスト中に現れる記号について】",
  ];

  const gen = readLines("./ch12/ex05/kokoro.txt");
  for (let line of expectedLines) {
    console.log(`line=${line}`);
    expect(gen.next().value).toEqual(line);
  }
});
