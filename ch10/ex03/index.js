const sum = require("./module.js").sum;
const Animal = require("./module.js").Animal;

// 動作確認
console.log(sum(1, 2)); // => 3
new Animal().eat(); // => eat
