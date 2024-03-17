// [Object.defineProperty()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) を使うと、
// writable 属性/enumerable 属性/configurable 属性を設定してオブジェクトのプロパティを定義できる。
// このメソッドを使って明示的に各属性を設定したプロパティを定義し、
// プロパティの変更、削除、`hasOwnProperty` と `propertyIsEnumerable` の結果に対してどのように影響するか確認するコードを書きなさい。

let o = {};
Object.defineProperty(o, "writable", {
    enumerable: false,
    configurable: false,
    writable: true,
    value: 1,
});

Object.defineProperty(o, "enumerable", {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 2,
});

Object.defineProperty(o, "configurable", {
    enumerable: false,
    configurable: true,
    writable: false,
    value: 3,
});
console.log("w=", o.writable, "e=", o.enumerable, "c=", o.configurable) // => w= 1 e= 2 c= 3

/**
 * hasOwnProperty
 * 3つのプロパティは全て独自プロパティの為trueを返す。
 */
console.log(o.hasOwnProperty("writable")); // => true
console.log(o.hasOwnProperty("enumerable")); // => true
console.log(o.hasOwnProperty("configurable")); // => true

/**
 * propertyIsEnumerable
 * enumerableなプロパティのみtrueを返す。
 */
console.log(o.propertyIsEnumerable("writable")); // => false
console.log(o.propertyIsEnumerable("enumerable")); // => true
console.log(o.propertyIsEnumerable("configurable")); // => false

/**
 * プロパティの変更
 * writableなプロパティのみ変更可能である。
 */
o.writable = 4;
try {
    o.enumerable = 4;
} catch (e) {
    console.log(e); // => TypeError
}
try {
    o.configurable = 4;
} catch (e) {
    console.log(e); // => TypeError
}
console.log("w=", o.writable, "e=", o.enumerable, "c=", o.configurable) // => w= 4 e= 2 c= 3

/**
 * プロパティの削除
 * configurableなプロパティのみ削除可能である。
 */
try {
    delete o.writable;
} catch (e) {
    console.log(e); // => TypeError
}
try {
    delete o.enumerable;
} catch (e) {
    console.log(e); // => TypeError
}
console.log(delete o.configurable); // => true: プロパティ削除成功
console.log("w=", o.writable, "e=", o.enumerable, "c=", o.configurable) // => w= 4 e= 2 c= undefined