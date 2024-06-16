import { fetchSumOfFileSizes } from ".";

const existsPath = "./ch13/ex04/exists";
const emptyPath = "./ch13/ex04/empty";

test("fetchSumOfFileSizes", async () => {
  expect(await fetchSumOfFileSizes(existsPath)).toBe(26);
  expect(await fetchSumOfFileSizes(emptyPath)).toBe(0);
});
