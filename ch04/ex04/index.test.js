import { bitCount } from ".";

test("bitCount", () => {
    expect(bitCount(0b111)).toEqual(3);
    expect(bitCount(0b1111111111111111111111111111111)).toEqual(31);
    expect(bitCount(0b100)).toEqual(1);
});