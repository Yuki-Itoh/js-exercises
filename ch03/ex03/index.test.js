import { equal } from "./index.js";

test("returns the result of the equivalence judgment", () => {
    expect(equal(0.3 - 0.2, 0.1)).toEqual(true);
    expect(equal(0.2 - 0.1, 0.1)).toEqual(true);
});