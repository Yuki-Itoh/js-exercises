import { removeOdd } from ".";

test("removeOdd", () => {
    expect(removeOdd({ a: 1, b: 2, c: 3 })).toEqual({ b: 2 });
});