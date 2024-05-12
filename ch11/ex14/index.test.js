import { sortJapanese, toJapaneseDateString } from ".";

test.each([
  {
    input: ["へ", "ば", "ほ", "ふ", "は", "つ", "ひ", "ぱ", "っ"],
    expected: ["っ", "つ", "は", "ば", "ぱ", "ひ", "ふ", "へ", "ほ"],
  },
  {
    input: ["はば", "はし", "ぱっけーじ", "ばいと", "ばつ"],
    expected: ["ばいと", "はし", "ばつ", "ぱっけーじ", "はば"],
  },
])("sortJapanese", ({ input, expected }) => {
  expect(sortJapanese(input)).toStrictEqual(expected);
});

test("toJapaneseDateString", () => {
  expect(toJapaneseDateString(new Date("2024-5-12"))).toBe("令和6年5月12日");
});
