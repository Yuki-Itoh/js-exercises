// 以下のコードを実行するとどのように表示されるか予想した後で実行しなさい。なぜそのような実行結果になったのか説明しなさい。

// また、コード内の全ての `let` を `var` に変えた場合と、全ての `let` を消した場合 (非 `strict` モードでのみ実行可能) ではどうなるでしょうか。それら結果の理由についても説明しなさい。

// ```js
// /* eslint-disable */
// for (let i = 0; i < 10; i++) {
//   (function () {
//     let i = 100;
//   })();
//   console.log(i);
// }
// console.log(i);


/* eslint-disable */
for (let i = 0; i < 10; i++) {
    (function () {
        let i = 100;
    })();
    console.log(i);
}
console.log(i);