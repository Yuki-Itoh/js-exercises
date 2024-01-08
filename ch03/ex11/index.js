// `Symbol()` を使い、同じ文字列から生成された 2 個の `Symbol` 変数を作成し、それらをプロパティとして持つオブジェクトを作成しなさい。
// そのオブジェクトに対して、作成した`Symbol`変数を使って各プロパティの値を取得しなさい。
// また、`Symbol()`ではなく、`Symbol.for()`で同名の変数を作成した場合の挙動を確認しなさい。

function createObjectWithProperty(property1, property2) {
    const o = {};
    o[property1] = 1;
    o[property2] = 2;

    console.log(`property1:${o[property1]}, property2:${o[property2]}`);
    return o;
}

const symbolText = "Symbol";

// Symbol()で変数を作成した場合、プロパティは別とみなされる
const obj1 = createObjectWithProperty(Symbol(symbolText), Symbol(symbolText)); // property1:1, property2:2

// Symbol.for()で変数を作成した場合、プロパティは同一とみなされる
createObjectWithProperty(Symbol.for(symbolText), Symbol.for(symbolText)); // property1:2, property2:2
