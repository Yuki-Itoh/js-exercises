import { toBigEndian, toLittleEndian } from ".";

test("endian conversion", () => {
  const le = new Uint32Array([12, 34, 56, 78, 90]);
  const be = new Uint32Array([90, 78, 56, 34, 12]);

  expect(toBigEndian(le)).toStrictEqual(be);
  expect(toLittleEndian(be)).toStrictEqual(le);
});
