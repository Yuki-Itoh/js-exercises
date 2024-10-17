// これは指定されたディレクトリからファイルを提供するシンプルで静的なHTTP
// サーバ。また、受信したリクエストをエコーする特別な/test/mirror
// エンドポイントも実装している。これは、クライアントをデバッグする際に便利。
import http from "http"; // 証明書を持っている場合は「https」を使用する。
import url from "url"; // URL 解析用。
import path from "path"; // ファイルシステムのパス操作用。
import fs from "fs"; // ファイル読み込み用。
// 指定されたポートで待ち受けるHTTP サーバを介して、
// 指定されたルートディレクトリのファイルを提供する。
function serve(rootDirectory, port) {
  let server = new http.Server(); // 新しいHTTP サーバを作成する。
  server.listen(port); // 指定されたポートで待ち受ける。
  console.log("Listening on port", port);
  // リクエストが届いたら、この関数で処理を行う。
  server.on("request", (request, response) => {
    // リクエストURL のパス部分を取得する。その際、付加されている
    // クエリパラメータは無視する。
    let endpoint = url.parse(request.url).pathname;
    // リクエストが「/test/mirror」の場合、リクエストをそのまま送り返す。
    // リクエストのヘッダやボディを見たい場合に便利。
    if (endpoint === "/test/mirror") {
      // レスポンスヘッダを設定する。
      response.setHeader("Content-Type", "text/plain; charset=UTF-8");
      // レスポンスのステータスコードを指定する。
      response.writeHead(200); // 200 OK
      // レスポンスボディの最初はリクエスト。
      response.write(
        `${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`
      );
      // リクエストヘッダを出力する。
      let headers = request.rawHeaders;
      for (let i = 0; i < headers.length; i += 2) {
        response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
      }
      // ヘッダの末尾に空行を追加する。
      response.write("\r\n");
      // 次に、リクエストボディをレスポンスボディにコピーする必要がある。
      // 両方ともストリームなので、パイプを使うことができる。
      request.pipe(response);
    }
    // それ以外の場合は、ローカルディレクトリからファイルを提供する。
    else {
      // エンドポイントをローカルファイルシステムのファイルにマッピングする。
      let filename = endpoint.substring(1); // 最初の/を取り除く。
      // パス中の「../」を禁止する。ルートディレクトリの外側のファイルを提供する
      // ことになり、セキュリティホールになるから。
      filename = filename.replace(/\.\.\//g, "");
      // 次に、相対パスを絶対パスに変換する。
      filename = path.resolve(rootDirectory, filename);
      // 拡張子に基づいて、ファイルのコンテンツタイプを推測する。
      let type;
      switch (path.extname(filename)) {
        case ".html":
        case ".htm":
          type = "text/html";
          break;
        case ".js":
          type = "text/javascript";
          break;
        case ".css":
          type = "text/css";
          break;
        case ".png":
          type = "image/png";
          break;
        case ".txt":
          type = "text/plain";
          break;
        default:
          type = "application/octet-stream";
          break;
      }

      // PUTの場合はファイルアップロード、それ以外はファイル取得
      if (request.method == "PUT") {
        console.log("PUT", filename);
        const stream = fs.createWriteStream(filename);
        request.pipe(stream);

        stream.on("finish", () => {
          response.setHeader("Content-Type", type);
          response.writeHead(200);
          response.end();
        });
        stream.on("error", (err) => {
          response.setHeader("Content-Type", "text/plain; charset=UTF-8");
          response.writeHead(404);
          response.end(err.message);
        });
      } else {
        let stream = fs.createReadStream(filename);
        stream.once("readable", () => {
          // ストリームが読み込めるようになったら、Content-Type ヘッダと
          // 200 OK ステータスを設定する。そして、ファイル読み出し
          // ストリームをレスポンスにパイプする。ストリームが終了すると、
          // パイプは自動的にresponse.end() を呼び出す。
          response.setHeader("Content-Type", type);
          response.writeHead(200);
          stream.pipe(response);
        });
        stream.on("error", (err) => {
          // ストリームを開こうとしてエラーが発生した場合、
          // そのファイルはおそらく存在しないか、読めないと思われる。
          // エラーメッセージをプレーンテキストで記述して、
          // 404 Not Found レスポンスを送信する。
          response.setHeader("Content-Type", "text/plain; charset=UTF-8");
          response.writeHead(404);
          response.end(err.message);
        });
      }
    }
  });
}
// コマンドラインから起動された場合は、serve() 関数を呼び出す。
serve(process.argv[2] || "absolute/path", parseInt(process.argv[3]) || 8000);

// fetch("http://localhost:8000/index.js").then((res) => {
//   res.text().then((value) => console.log("value:", value));
// });

// fetch("http://localhost:8000/hello.txt", {
//   method: "PUT",
//   body: fs.createReadStream("file.txt"),
//   duplex: "half",
// });