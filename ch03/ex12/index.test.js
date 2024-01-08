import { equals } from ".";

const obj1 = { x: 1 };
obj1['y'] = 2;
const obj2 = { x: 1, y: 2 };

test("同じ内容でも別オブジェクトであれば厳密等価ではない", () => {
    expect(obj1 === obj2).toBe(false);
})

test("別オブジェクトでも同じ内容であれば等価とみなす関数のテスト", () => {
    expect(equals(obj1, obj2)).toBe(true);
});