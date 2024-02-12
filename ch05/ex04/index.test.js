import { fib1, fib2, fib3 } from ".";

test("fib", () => {
    expect(fib1(5)).toBe(5);
    expect(fib1(50)).toBe(12586269025);

    expect(fib2(5)).toBe(5);
    expect(fib2(50)).toBe(12586269025);

    expect(fib3(5)).toBe(5);
    expect(fib3(50)).toBe(12586269025);
});