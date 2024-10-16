import express from "express";
import path from "path";
import fs from "fs";

export const app = express();

app.all("/test/mirror", (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");
  res.status(200);
  res.write(`${req.method} ${req.url} HTTP/${req.httpVersion}\r\n`);

  const headers = req.headers;
  for (let i = 0; i < headers.length; i += 2) {
    res.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
  }
  res.write("\r\n");
  req.pipe(res);
});

// パスを指定せず、リクエストを受けるたびに実行される処理
app.use((req, res, next) => {
  console.log("app use", req.path);
  let filename = req.path.substring(1);
  filename = filename.replace(/\.\.\//g, "");
  filename = path.resolve("absolute/path", filename);

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

  let stream = fs.createReadStream(filename);
  stream.once("readable", () => {
    // ストリームが読み込めるようになったら、Content-Type ヘッダと
    // 200 OK ステータスを設定する。そして、ファイル読み出し
    // ストリームをレスポンスにパイプする。ストリームが終了すると、
    // パイプは自動的にresponse.end() を呼び出す。
    res.setHeader("Content-Type", type);
    res.writeHead(200);
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    // ストリームを開こうとしてエラーが発生した場合、
    // そのファイルはおそらく存在しないか、読めないと思われる。
    // エラーメッセージをプレーンテキストで記述して、
    // 404 Not Found レスポンスを送信する。
    res.setHeader("Content-Type", "text/plain; charset=UTF-8");
    res.writeHead(404);
    res.end(err.message);
  });
});

// app.listen(8080);
