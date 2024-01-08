// 文字名 `"Hundred Points Symbol"` の絵文字表現 `"💯"` に対して `length` の値を確認するテストコードを書きなさい。
// また、utf-16 コードポイント表現 `"\uD83D\uDCAF"`、utf-32 コードポイント表現 `"\u{0001F4AF}"` が絵文字と同値であることをテストコードで確認しなさい。

describe("Hundred Points Symbol", () => {
    describe("equal", () => {
        it("", () => {
            const symbol = "💯"
            expect(symbol.length).toEqual(2);
            expect(symbol).toEqual("\uD83D\uDCAF");
            expect(symbol).toEqual("\u{0001F4AF}");
        });
    });
});