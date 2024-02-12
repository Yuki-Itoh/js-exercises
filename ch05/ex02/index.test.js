import { toEscape1, toEscape2 } from ".";

test("escape", () => {
    expect(toEscape1('\0\b\t\n\v\f\r\"\'\\')).toEqual('\\\\\\\\\\\\\\\\\\\\');
    expect(toEscape2('\0\b\t\n\v\f\r\"\'\\')).toEqual('\\\\\\\\\\\\\\\\\\\\');
});