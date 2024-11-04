import iconv from "iconv-lite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESMの場合は以下で実行時のパスに依存せずに動作させることができる。
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.readFile(`${__dirname}/hello.txt`, (_, data) => {
  const decoded = iconv.decode(data, "sjis");
  console.log("decoded=", decoded);
});
