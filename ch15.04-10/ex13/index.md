## 問題

15.4-10.11 では `#/` や `#/active` といった URL を利用した。
少し昔だとこのような URL は `#!/` や `#!/active` と `!` を付けることもあった (もしかしたら職場でそのようなコードを見るかもしれない)。
このような形式を当時は hashbang と呼んだ。どうしてこのようなスタイルが存在したのだろうか。

**参考**: [Twitter がページ表示時間を 5 分の 1 に高速化。どのようなテクニックを使ったのか？](https://www.publickey1.jp/blog/12/twitter51.html)

## 回答

hashbangはAjax(Asynchronous JavaScript + XML)を利用するために考えられた。
サーバーは`#`の前までのURLを解釈してコンテンツを出力し、ブラウザにてJavaScriptが`#`以降を解釈してコンテンツを書き換えることができる。
これにより、GoogleMapの拡大縮小のように画面遷移なしで画面を切り替えることを実現している。

**参考**:

- [XMLの第一人者Tim Bray氏「URLに#!入れるな」](https://gihyo.jp/dev/clip/01/orangenews/vol62/0005)
- [初心者目線でAjaxの説明](https://qiita.com/hisamura333/items/e3ea6ae549eb09b7efb9)
