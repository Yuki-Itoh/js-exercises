// 以下では 1000 HTTP リクエストが同時に実行される
const promises = [];
for (let i = 0; i < 1000; i++) {
  promises.push(fetch(`https://example.com`));
}
console.log(await Promise.all(promises));
