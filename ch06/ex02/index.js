// オブジェクトリテラルで独自プロパティを持つオブジェクトを定義し、`Object.create` を使用してその継承オブジェクトを生成しなさい。
// [Object.getPrototypeOf()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
// を利用して、生成した継承オブジェクトのプロトタイプが`Object.create` で渡したオブジェクトになっていることを確認しなさい。

const obj1 = { a: 1 };
const obj2 = Object.create(obj1);
console.log(Object.getPrototypeOf(obj2)); // => { a: 1 }