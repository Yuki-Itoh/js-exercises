import fs from "fs";

export function* readLines(filePath) {
  const bufferSize = 1024;
  const buffer = new Buffer.alloc(bufferSize);
  const fd = fs.openSync(filePath);
  let text = "";

  try {
    for (;;) {
      const bytesRead = fs.readSync(fd, buffer);

      if (bytesRead <= 0) {
        // これ以上ファイルを読めない場合は最後のtextを返してループから抜ける
        yield text;
        break;
      }

      text += buffer.toString("utf8", 0, bytesRead);

      let newlineIndex = text.indexOf("\n");
      while (newlineIndex > 0) {
        const line = text.slice(0, newlineIndex);
        console.log(`line=${line}`);
        yield line;
        // 改行コードを削除
        text = text.slice(newlineIndex + 1);
        // 次の改行コード位置の特定
        newlineIndex = text.indexOf("\n");
      }
    }
  } finally {
    fs.closeSync(fd);
  }
}
