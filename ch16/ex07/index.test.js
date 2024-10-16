import { checkEntry } from ".";

test("checkEntry", () => {
  expect(checkEntry("ch16/ex07/hello.txt")).toEqual("file");
  expect(checkEntry("ch16/ex07")).toEqual("directory");
});
