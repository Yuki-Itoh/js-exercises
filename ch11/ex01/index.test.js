import { TypeMap } from ".";

class Foo {}

test.each([
  {
    key: String,
    value: "string",
  },
  {
    key: Number,
    value: 123,
  },
  {
    key: BigInt,
    value: 123n,
  },
  {
    key: Boolean,
    value: true,
  },
  {
    key: Foo,
    value: new Foo(),
  },
  {
    key: Date,
    value: new Date(),
  },
])("正常系", ({ key, value }) => {
  const typeMap = new TypeMap();
  typeMap.set(key, value);
  expect(typeMap.get(key)).toBe(value);
});

test.each([
  {
    // valueがkeyのインスタンスではない
    key: Date,
    value: "not a date",
  },
  {
    // keyがコンストラクタ関数ではない
    key: 123,
    value: 123,
  },
])("例外系", ({ key, value }) => {
  const typeMap = new TypeMap();
  expect(() => {
    typeMap.set(key, value);
  }).toThrow();
});
