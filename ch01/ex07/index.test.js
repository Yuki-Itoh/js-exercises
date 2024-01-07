import { Point } from "./index.js";

describe("Point", () => {
  describe("add", () => {
    it("returns sum of Point", () => {
      const point = new Point(1, 1);
      expect(point.add(new Point(2, 3))).toEqual(new Point(3, 4));
    });
  });
});
