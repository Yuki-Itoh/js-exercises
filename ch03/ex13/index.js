// `valueOf()`, `toString()` を持つクラスを定義しなさい。
// そのクラスのインスタンスを作成し、`valueOf()`, `toString()` を直接呼び出さずにそれぞれの結果を出力するコードを書きなさい。

// クラス定義のサンプルコード

// ```js
// class Example {
//   valueOf() {
//     // TODO
//   }

//   toString() {
//     // TODO
//   }
// }

// let obj = new Example();

/**
 * 面積を表すクラス
 */
class Area {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    valueOf() {
        console.log('Example.valueOf() is called.');
        return this.x * this.y;
    }

    toString() {
        console.log('Example.toString() is called.');
        return `x=${this.x}, y=${this.y}, area=${this.valueOf()}`;
    }
}

let obj = new Area(5, 10);

console.log("string:" + obj); // => "string:50": valueOf()が呼ばれる
console.log(1 + obj); // => 51: valueOf()が呼ばれる
const objString = String(obj); // toString()→valueOf()の順に両方呼ばれる
console.log(objString); // => "x=5, y=10, area=50"
