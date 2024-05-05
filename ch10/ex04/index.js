/**
 * デフォルトのインポート
 */
import { Animal, sum } from "./module.js";

console.log(sum(1, 2)); // => 3
new Animal().eat(); // => eat

/**
 * 名前変更を伴うインポート
 */
import { Animal as Animal2, sum as sum2 } from "./module.js";

console.log(sum2(1, 2)); // => 3
new Animal2().eat(); // => eat

/**
 * 再エクスポート
 */
import { Animal3, sum3 } from "./module_reexport.js";

console.log(sum3(1, 2)); // => 3
new Animal3().eat(); // => eat
