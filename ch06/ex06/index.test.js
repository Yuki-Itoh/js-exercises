import { getPropertiesOf } from ".";

test("getPropertiesOf", () => {
    const symbol = Symbol.for("symbol")
    const o = {
        a: 1,
        b: "",
        "symbol": 2,
    }
    Object.defineProperty(o, "nonEnumerable", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: "nonEnumerable",
    });
    o[symbol] = 3;

    expect(getPropertiesOf(o)).toStrictEqual(['a', 'b', 'symbol', 'nonEnumerable', symbol]);
});