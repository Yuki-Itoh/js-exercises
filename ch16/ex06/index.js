import fs from "fs";

const fileName = "hello.txt";

// 末尾に0x00が追加される
fs.truncate(fileName, 20, (err) => console.log(err));
