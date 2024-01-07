import { fib } from "./index.js";

describe("math", () => {
  describe("fib", () => {
    it("returns 5th fibonacci number", () => {
      expect(fib(5)).toBe(5);
    });
    it("returns 50th fibonacci number", () => {
      expect(fib(50)).toBe(12586269025);
    });
  });
});
