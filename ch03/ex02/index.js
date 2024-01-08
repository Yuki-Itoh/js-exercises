// JavaScript の整数の最大値と最小値をコンソールに出力しなさい。なお最大値最小値は ES6 の `Number` のプロパティ定義を利用しなさい (3.2.3 参照)。
// 同様に最大値+1 をコンソールに出力しなさい。
// 最後に最大値+1 と最大値+2 を `===` で比較した結果をコンソールに出力し、そのように出力される理由を簡潔に文章で記載しなさい。

console.log(Number.MAX_SAFE_INTEGER); // => 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // => -9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // => 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // => 9007199254740992

console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2) // => true: 保証範囲外の整数の精度が損なわれているため(差は0.99999...で切り捨てられている)
console.log(9007199254740992 === 9007199254740993) // => true
console.log(9007199254740992 === 9007199254740994) // => false
console.log(9007199254740993 === 9007199254740994) // => false