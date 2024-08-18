## 問題

1. Active や Completed を選択後にブラウザのリロードを行うとどうなるだろうか。hashchange と pushState それぞれの実装について調べなさい
   (ヒント: 開発者ツールでどのような通信が発生しているか調べてみなさい)。
2. ここまでの例は [serve](https://www.npmjs.com/package/serve) コマンドで HTML や JS といったファイル配信するサーバーを立ち上げてきた。
   サーバー側がどのような挙動をすれば pushState を使った実装が期待通り動作するか考えて答えなさい。

## 回答

1.

- hashchange  
  URLのハッシュはサーバーへのリクエストに影響しないため、リロードしてもエラーは発生しない。
- pushState  
  pushStateで追加したURLに対してリクエストし直すため、404が発生する。

2. pushStateで指定するURLに対して応答できるようにサーバー側を実装する。
