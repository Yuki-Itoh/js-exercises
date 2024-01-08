//正負の ` Infinity` と `NaN` で `+`, `-`, `\*`, `/` の計算を全ての組み合わせでして結果を見なさい。

// 正のInfinityとNaNの組み合わせ
console.log(Infinity + NaN); // => NaN
console.log(Infinity - NaN); // => NaN
console.log(Infinity * NaN); // => NaN
console.log(Infinity / NaN); // => NaN
console.log(NaN + Infinity); // => NaN
console.log(NaN - Infinity); // => NaN
console.log(NaN * Infinity); // => NaN
console.log(NaN / Infinity); // => NaN

// 負のInfinityとNaNの組み合わせ
console.log(-Infinity + NaN); // => NaN
console.log(-Infinity - NaN); // => NaN
console.log(-Infinity * NaN); // => NaN
console.log(-Infinity / NaN); // => NaN
console.log(NaN + -Infinity); // => NaN
console.log(NaN - -Infinity); // => NaN
console.log(NaN * -Infinity); // => NaN
console.log(NaN / -Infinity); // => NaN

// 正のInfinityと負のInfinityの組み合わせ
console.log(Infinity + -Infinity) // => NaN
console.log(Infinity - -Infinity) // => Infinity
console.log(Infinity * -Infinity) // => -Infinity
console.log(Infinity / -Infinity) // => NaN
console.log(-Infinity + Infinity) // => NaN
console.log(-Infinity - Infinity) // => -Infinity
console.log(-Infinity * Infinity) // => -Infinity
console.log(-Infinity / Infinity) // => NaN
