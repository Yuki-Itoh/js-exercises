import { Complex, add, sub, mul, div } from ".";

test("add", () => {
    expect(add(new Complex(1, 2), new Complex(3, 4))).toEqual(new Complex(4, 6));
});

test("sub", () => {
    expect(sub(new Complex(1, 2), new Complex(3, 4))).toEqual(new Complex(-2, -2));
    expect(sub(new Complex(3, 4), new Complex(1, 2))).toEqual(new Complex(2, 2));
});

test("mul", () => {
    expect(mul(new Complex(1, 2), new Complex(3, 4))).toEqual(new Complex(-5, 10));
});

test("div", () => {
    expect(div(new Complex(1, 2), new Complex(3, 4))).toEqual(new Complex(11 / 25, + 2 / 25));
});
