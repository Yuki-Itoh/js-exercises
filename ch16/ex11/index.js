import net from "net";

const server = net.createServer();
server.listen(6789, () => {
  console.log("Server listening on port 6789.");
});

server.on("connection", (socket) => {
  socket.on("data", (data) => {
    const text = data.toString();
    const textLines = text.split("\r\n");
    const requestLine = textLines[0].split(" ");
    const method = requestLine[0];
    const path = requestLine[1];

    const response405 = `HTTP/1.1 405 Method Not Allowed
Content-Type: text/html

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greeting Form</title>
  </head>
  <body>
    <p>405 Method Not Allowed</p>
  </body>
</html>`;

    if (path === "/") {
      if (method === "GET") {
        const response = `HTTP/1.1 200 OK
Content-Type: text/html

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greeting Form</title>
  </head>
  <body>
    <form action="/greeting" method="POST">
      <label for="greeting">Name:</label>
      <input type="text" id="name" name="name" />
      <input type="text" id="greeting" name="greeting" />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
`;
        socket.write(response);
      } else {
        socket.write(response405);
      }
    } else if (path === "/greeting") {
      if (method === "POST") {
        const requestBody = textLines[textLines.length - 1];
        console.log("requestBody:", requestBody);
        const pairs = requestBody.split("&");
        const name = decodeURIComponent(pairs[0].split("=")[1]);
        const greeting = decodeURIComponent(pairs[1].split("=")[1]);

        const response = `HTTP/1.1 200 OK
Content-Type: text/html

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greeting Form</title>
  </head>
  <body>
    <p>name=${name}</p>
    <p>greeting=${greeting}</p>
  </body>
</html>
`;
        socket.write(response);
      } else {
        socket.write(response405);
      }
    } else {
      console.log("404 aaaaaaaaaaaaaa");
      const response404 = `HTTP/1.1 404 Not Found
Content-Type: text/html

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greeting Form</title>
  </head>
  <body>
    <p>404 Not Found</p>
  </body>
</html>`;
      socket.write(response404);
    }
  });
});

// クライアントは232個まで同時接続し、その後`Error: connect ECONNREFUSED`が発生した。
// ファイルディスクリプタなどのリソース上限が原因である。
// 参考：https://qiita.com/reioto/items/d5bc1375986b2f84c24e
// for (let i = 0; i < 1000; i++) {
//   const client = new net.Socket();
//   client.connect(6789, () => {
//     console.log(`client num = ${i + 1}`);
//   });
// }
