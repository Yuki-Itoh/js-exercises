import { spawn } from "child_process";
import path from "path";

// ESMでこのファイルの絶対パスとして__dirnameを定義するイディオム
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// startChildで起動したプロセスの参照
let child = null;

// node ./child.js を起動し、このプロセスが終了したときに解決するPromiseを返す
// cf. https://nodejs.org/api/child_process.html#event-close
async function startChild() {
  const childPath = path.join(__dirname, "child.js");
  child = spawn("node", [childPath]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return new Promise((res) => {
    child.on("close", (code, signal) => {
      res([code, signal]);
    });
  });
}

// TODO: ここに処理を書く
async function retryChild() {
  startChild().then((result) => {
    retryChild();
    console.log("result=", result);
  });
}

process.on("SIGINT", () => {
  console.log("SIGINT event");
  if (child) {
    child.kill("SIGINT");
    child.on("close", () => {
      console.log("on close");
      process.exit();
    });
  }
});

process.on("SIGQUIT", () => {
  console.log("SIGQUIT event");
  if (child) {
    child.kill("SIGQUIT");
    child.on("close", () => {
      console.log("on close");
      process.exit();
    });
  }
});

retryChild();
