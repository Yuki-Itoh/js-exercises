import { templateLiteral } from ".";

test("templateLiteral", () => {
  expect(templateLiteral`${"A"}`).toEqual("string");
  expect(templateLiteral`${{ x: 1 }}`).toEqual("object");

  expect(
    templateLiteral`${"A"}, ${1}, ${true}, ${1n}, ${Symbol("s")}, ${{
      x: 1,
    }}, ${null}, ${undefined}`
  ).toEqual(
    "string, number, boolean, bigint, symbol, object, object, undefined"
  );
});
