## 問題

このサーバでは Cookie を使ってクライアントのセッションを識別し、タスク一覧をセッションごとに分離して管理する簡易的な認証/認可を行っている。サーバが設定している Cookie の値は `sid=<セッションに一意に割り当てた ID>; SameSite=Lax; Path=/; HttpOnly;` である。ToDo アプリでいくつかのタスクを作成した後、以下に挙げる操作を実施したとき、それぞれどのような結果になるか記載し、その理由を説明しなさい。

1. index.js で`document.cookie` プロパティを `console.log`で表示する
2. ブラウザの開発者コンソールで http://localhost:3000/ の Cookie を表示する
3. ToDo アプリのタブをリロードする
4. 同一ブラウザの異なるタブやウィンドウで http://localhost:3000/ を開いて ToDo リストの状態を確認する
5. シークレットウィンドウや異なるブラウザで http://localhost:3000/ を開いて ToDo リストの状態を確認する
6. http://127.0.0.1:3000/ を開いて ToDo リストの状態を確認する

## 回答

1. `document.cookie`は空文字  
   → HttpOnlyが有効になっているため、クライアントの JavaScript から Cookie を参照できない。
2. Applicationタブから確認することができた。
3. リロードしてもセッションは継続
4. 同一ブラウザの異なるタブやウィンドウで開くと、同じセッション（sidが同じ）で開くことができた。
5. シークレットウィンドウや異なるブラウザは別セッションであった。
6. ↓クロスオリジンのポリシー違反でサーバーが応答しなかった。
   `Access to fetch at 'http://localhost:3000/api/tasks' from origin 'http://127.0.0.1:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`
