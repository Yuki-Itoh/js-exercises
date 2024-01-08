import { equalArrays } from "./index.js";

describe("equalArrays", () => {
    describe("", () => {
        it("", () => {
            expect(equalArrays([1, 2, 3], [1, 2, 3])).toEqual(true);
            expect(equalArrays([NaN, 1], [NaN, 1])).toEqual(false); // 値が同じなのにfalseを返す
        });
    });
});