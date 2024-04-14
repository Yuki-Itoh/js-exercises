import { TypedMap } from ".";

test.each([
  // 正常系
  {
    keyType: "string",
    valueType: "string",
    entries: [],
    isThrow: false,
  },
  {
    keyType: "string",
    valueType: "string",
    entries: [
      ["key1", "value1"],
      ["key2", "value2"],
    ],
    isThrow: false,
  },
  {
    keyType: "number",
    valueType: "number",
    entries: [[1, 2]],
    isThrow: false,
  },
  {
    keyType: "undefined",
    valueType: "undefined",
    entries: [[undefined, undefined]],
    isThrow: false,
  },
  {
    keyType: "object",
    valueType: "object",
    entries: [
      [null, null],
      [new Date(), {}],
    ],
    isThrow: false,
  },
  {
    keyType: "boolean",
    valueType: "boolean",
    entries: [[true, false]],
    isThrow: false,
  },
  {
    keyType: "bigint",
    valueType: "bigint",
    entries: [[BigInt("1"), 1n]],
    isThrow: false,
  },
  {
    keyType: "symbol",
    valueType: "symbol",
    entries: [[Symbol("symbol"), Symbol.for("symbol")]],
    isThrow: false,
  },
  {
    keyType: "function",
    valueType: "function",
    entries: [[() => {}, Function("42")]],
    isThrow: false,
  },
  // 例外系
  {
    keyType: "string",
    valueType: "number",
    entries: ["str", "1"],
    isThrow: true,
  },
])("TypedMap.constructor()", ({ keyType, valueType, entries, isThrow }) => {
  if (isThrow) {
    // keyTypeもしくはvalueTypeとentriesの型が一致していなければエラーをthrowする。
    expect(() => {
      const map = new TypedMap(keyType, valueType, entries);
    }).toThrow();
  } else {
    // mapに期待した値が入っていることを確認する。
    const map = new TypedMap(keyType, valueType, entries);
    const mapIter = map.entries();

    expect(map.size).toBe(entries.length);
    for (let entry of entries) {
      expect(mapIter.next().value).toStrictEqual(entry);
    }
  }
});

test("TypedMap.set()", () => {
  const map = new TypedMap("string", "number", [["key1", 1]]);

  // 正常系
  const [key, value] = ["key2", 2];
  map.set(key, value);
  expect(map.has(key)).toBeTruthy();
  expect([...map.values()].includes(value)).toBeTruthy();

  // keyが不正な値の場合、エラー
  expect(() => {
    map.set(3, 3);
  }).toThrow();
  // valueが不正な値の場合、エラー
  expect(() => {
    map.set("key4", "invalid value");
  }).toThrow();
});
