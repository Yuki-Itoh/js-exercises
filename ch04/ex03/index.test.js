import { add, sub } from ".";

test("add", () => {
    expect(add(1, 1)).toEqual(2);
    expect(add(16, -16)).toEqual(0);
    expect(add(-16, 16)).toEqual(0);
});

test("sub", () => {
    expect(sub(1, 1)).toEqual(0);
    expect(sub(16, 15)).toEqual(1);
    expect(sub(15, 16)).toEqual(-1);
});