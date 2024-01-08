import { equal } from "./index.js";

describe("同値判定", () => {
    it("returns the result of the equivalence judgment", () => {
        expect(equal(0.3 - 0.2, 0.1)).toEqual(true);
        expect(equal(0.2 - 0.1, 0.1)).toEqual(true);
    });
});