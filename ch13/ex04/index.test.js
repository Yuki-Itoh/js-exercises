import { fetchFirstFileSize, fetchSumOfFileSizes } from ".";

const existsPath = "./ch13/ex04/exists";
const emptyPath = "./ch13/ex04/empty";

test("fetchFirstFileSize", async () => {
  expect(fetchFirstFileSize(existsPath)).resolves.toBe(13);
  expect(fetchFirstFileSize(emptyPath)).resolves.toBe(null);
});

test("fetchSumOfFileSizes", async () => {
  expect(fetchSumOfFileSizes(existsPath)).resolves.toBe(26);
  expect(fetchSumOfFileSizes(emptyPath)).resolves.toBe(0);
});
