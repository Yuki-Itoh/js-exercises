## 問題

React, jQuery などの主要なフロントエンドフレームワークを選び、そのフレームワークを使っていればどのように XSS 対策がされるか、また使っていてもどのような XSS の危険が残るか記述しなさい。

## 回答

- Reactについて

  - 標準エスケープ機能があり、悪意のあるスクリプトの実行を防ぐ。
  - href属性に戦闘が`javascript:`から始まる文字列を入れた場合、javascriptとして実行されてしまう。

- 参考
  - [Reactで発生しうるXSS脆弱性](https://qiita.com/kazzzzzz/items/897f8ed89ca36a0734de)
