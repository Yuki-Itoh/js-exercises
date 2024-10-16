import iconv from "iconv-lite";
import fs from "fs";

fs.readFile("ch16/ex04/hello.txt", (_, data) => {
  const decoded = iconv.decode(data, "sjis");
  console.log("decoded=", decoded);
});
