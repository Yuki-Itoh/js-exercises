import { equalArrays } from "./index.js";

test("equalArrays", () => {
    expect(equalArrays([1, 2, 3], [1, 2, 3])).toEqual(true);
    expect(equalArrays([NaN, 1], [NaN, 1])).toEqual(false); // 値が同じなのにfalseを返す
    expect(equalArrays("one", true)).toEqual(true);
});