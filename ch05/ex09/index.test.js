import { parse } from ".";

test("parse", () => {
    const obj = {
        a: 1,
        b: 2,
        c: 3
    }

    // 正常系
    const successed = parse(JSON.stringify(obj))
    expect(successed.success).toBe(true);
    expect(successed.data).toEqual(obj);

    // 例外系
    const failed = parse(JSON.stringify(obj) + "xxx")
    expect(failed.success).toBe(false);
    expect(failed.error !== undefined).toBe(true);
});