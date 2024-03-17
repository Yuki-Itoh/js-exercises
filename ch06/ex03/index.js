// [Object.prototype.isPrototypeOf()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) は、
// オブジェクトが別のオブジェクトのプロトタイプチェーンに存在するかどうかを判定できる。
// このメソッドを使って、P149 冒頭のコードにおいて、` o` が `p` および `q` のプロトタイプチェーン上に存在すること、および、`p` が `q` のプロトタイプチェーン上に存在することを確認しなさい。

// また同様に、`Object`, `Array`, `Date`, `Map` のプロトタイプチェーンの継承関係を確認するためのコードも書きなさい。

let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();

console.log(Object.getPrototypeOf(o).isPrototypeOf(p)); // => true: oはpのプロトタイプチェーン上に存在する
console.log(Object.getPrototypeOf(o).isPrototypeOf(q)); // => true: oはqのプロトタイプチェーン上に存在する
console.log(Object.getPrototypeOf(p).isPrototypeOf(q)); // => true: pはqのプロトタイプチェーン上に存在する

/**
 * Array, Date, MapはそれぞれObjectを継承している。
 * Array, Date, Map間は継承関係がない。
 */
console.log(Object.prototype.isPrototypeOf(Array)); // => true
console.log(Object.prototype.isPrototypeOf(Date)); // => true
console.log(Object.prototype.isPrototypeOf(Map)); // => true
console.log(Array.prototype.isPrototypeOf(Object)); // => false
console.log(Array.prototype.isPrototypeOf(Date)); // => false
console.log(Array.prototype.isPrototypeOf(Map)); // => false
console.log(Date.prototype.isPrototypeOf(Object)); // => false
console.log(Date.prototype.isPrototypeOf(Array)); // => false
console.log(Date.prototype.isPrototypeOf(Map)); // => false
console.log(Map.prototype.isPrototypeOf(Object)); // => false
console.log(Map.prototype.isPrototypeOf(Array)); // => false
console.log(Map.prototype.isPrototypeOf(Date)); // => false
