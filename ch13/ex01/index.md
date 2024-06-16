## 問題

以下のコードを実行すると何が出力されるか予想し実際に確認しなさい。
また「[タスク](https://developer.mozilla.org/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)」について調査し、この用語を用いて理由を説明しなさい。

"" 回答

- 予想
  `longRunningFunction`の処理でスレッドが占有され、`Hello, world!`のログが出力されない。

- 実際
  `Hello, world!`のログが出力されなかった。

- 理由
  javascriptはシングルスレッド言語である。
  `setTimeout()`に渡したコールバックはタスクキューに追加されたが、`longRunningFunction()`がスレッドを占有したためキューに積まれたタスクが実行されなかった。
