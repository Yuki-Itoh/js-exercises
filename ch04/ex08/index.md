## 問題
古い JavaScript のコードでは `undefined` と比較を行う際に:

```js
if (foo === undefined) { ... }
```

ではなく以下のように書かれたコードを見ることがある (注: `void 0` は `undefined` を返す)。

```js
if (foo === void 0) { ... }
```

これにはどのような理由があるか、また今ではこのような書き方をしないのは何故か調べて回答しなさい。

## 回答
* `void 0`が使用されていた理由  
`undefined`はグローバル変数であり、値の代入が可能であるから。  
`undefined`が`undefined`である保証がなく、`void 0`の方が必ず`undefined`を返すので安全であった。

* 今では`void 0`を書かない理由  
Javascript 1.8.5(2015年)以降はグローバル変数が読み取り専用となったため、`undefined`を安全に使用できるようになった。



参考リンク：
* https://qiita.com/vsanna/items/3daa7c4788d5480d964e
* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined