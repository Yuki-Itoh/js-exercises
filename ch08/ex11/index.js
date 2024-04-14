// 組み込み関数
console.log(Date.toString()); // => function Date() { [native code] }

// 自作関数
class A {
  toString() {
    return "test";
  }
}
console.log(A.toString());
// 出力結果：
// class A {
//     toString() {
//       return "test";
//     }
//   }
