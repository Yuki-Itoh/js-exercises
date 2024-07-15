## 問題

ブラウザで動的なスクリプトの[インポート](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/import) (`await import(url)`) できる環境を構築して動作確認しなさい (可能ならば cross-site にしなさい)。

またその動作確認方法を文書で記述しなさい。

## 回答

ブラウザでHTMLを開いてから2秒後にimport()を呼び出すページを作成した。
2秒後に警告画面が開かれたことから動的にimport出来ていることを確認した。
