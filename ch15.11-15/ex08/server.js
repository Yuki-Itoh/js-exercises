import WebSocket, { WebSocketServer } from "ws";

const port = 3003;
const wss = new WebSocketServer({ port });

// 他のクライアントにメッセージを転送する
wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    const message = data.toString();
    const waitTIme = Math.floor(Math.random() * 1000 * 5);
    console.log(message, `wait ${waitTIme}ms`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client != ws) {
        setTimeout(() => {
          client.send(message);
        }, waitTIme);
      }
    });
  });
});

helloWebSocket();
const response = await sendRequest("World");
console.log(response); // -> "Hello, World"

/**
 * 1. WebSocketサーバにリクエストを送ります。
 * @param {} msg リクエスト本文
 * @returns Promise
 */
async function sendRequest(msg) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket("ws://localhost:3003");
    socket.addEventListener("open", (e) => {
      socket.send(msg);
    });

    socket.addEventListener("message", (e) => {
      resolve(e.data);
    });

    socket.addEventListener("close", (e) => {
      reject(new Error("socket disconnected"));
    });

    // タイムアウト処理
    const timeout = setTimeout(() => {
      reject(new Error("timeout"));
    }, 5000);
  });
}

/**
 * 2. WebSocketサーバから転送されたリクエストメッセージを受信した際、
 * リクエスト本文の先頭に`Hello, `を付加してレスポンスを返します。
 * @returns
 */
function helloWebSocket() {
  const socket = new WebSocket("ws://localhost:3003");

  socket.addEventListener("message", (e) => {
    socket.send(`Hello, ${e.data}`);
  });
}
