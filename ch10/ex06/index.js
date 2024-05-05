console.log("1");
import "./module.js";
console.log("2");
import "./module.js";
console.log("3");
import "./module.js";
console.log("4");

/**
 * 予想：
 * 1
 * empty module imported. // インポートの実行
 * 2
 * 3
 * 4
 */

/**
 * 実行結果：
 * empty module imported. // インポートの実行
 * 1
 * 2
 * 3
 * 4
 */
