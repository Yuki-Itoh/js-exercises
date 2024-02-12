import { isHoliday1, isHoliday2 } from ".";

test("isHoliday", () => {
    expect(isHoliday1("月")).toBe(false);
    expect(isHoliday1("火")).toBe(false);
    expect(isHoliday1("水")).toBe(false);
    expect(isHoliday1("木")).toBe(false);
    expect(isHoliday1("金")).toBe(false);
    expect(isHoliday1("土")).toBe(true);
    expect(isHoliday1("日")).toBe(true);
    expect(() => { isHoliday1("") }).toThrow(); // サポート外の引数はエラーをスローする

    expect(isHoliday2("月")).toBe(false);
    expect(isHoliday2("火")).toBe(false);
    expect(isHoliday2("水")).toBe(false);
    expect(isHoliday2("木")).toBe(false);
    expect(isHoliday2("金")).toBe(false);
    expect(isHoliday2("土")).toBe(true);
    expect(isHoliday2("日")).toBe(true);
    expect(() => { isHoliday2("") }).toThrow(); // サポート外の引数はエラーをスローする
});