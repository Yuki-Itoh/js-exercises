## 問題

オリジン間リソース共有（CORS）について、以下の問いに答えなさい。

1. クロスオリジンリクエストに制約が無かった場合、どのような問題が発生するか述べなさい
2. クロスオリジンリクエストで メソッド(`POST`/`GET`)やリクエストの内容によって Preflight リクエストの有無が異なるのは何故か、その理由を述べなさい

## 回答

1. クロスサイトリクエストフォージェリ（CSRF）の問題が昔発生していた。被害者のブラウザから別のアプリケーションに偽のクライアントリクエストが送信されていた。  
   **参考** https://aws.amazon.com/jp/what-is/cross-origin-resource-sharing/

2. 単純リクエストの場合はセキュリティリスクが低いと判断され、preflightリクエストは送信されない。  
   単純リクエストとは以下の条件を満たすもの。

- GET, HEAD, POSTのうちいずれか
- ヘッダーに含まれるのが以下のうちいずれか
  ユーザーエージェントによって自動的に設定されたヘッダー
  Accept
  Accept-Language
  Content-Language
  Content-Type
- Content-Typeのヘッダーが以下のうちいずれか  
  application/x-www-form-urlencoded
  multipart/form-data
  text/plain
- リクエストに使用されるどの XMLHttpRequestUpload にもイベントリスナーが登録されていないこと。
- リクエストに ReadableStream オブジェクトが使用されていないこと。

**参考** https://qiita.com/nnishimura/items/1f156f05b26a5bce3672
