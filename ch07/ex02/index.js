// 以下の関数を繰り返し (`for`, `while`) や条件分岐 (`if`) を利用せず
// `map`, `filter`, `reduce`, `forEach` 等のメソッドを利用して書き直しなさい。

function fizzbuzz(n) {
  const array = [...Array(n)]
    .map((_, index) => index + 1) // 1からnの配列を作成する
    .forEach((value) => {
      //TODO if文を使わない
      if (value % 15 === 0) {
        console.log("FizzBuzz");
      } else if (value % 3 === 0) {
        console.log("Fizz");
      } else if (value % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(value);
      }
    });
}

function sumOfSquaredDifference(f, g) {
  let result = 0;
  f.forEach((_, index) => {
    result += (f[index] - g[index]) ** 2;
  });
  return result;
}

function sumOfEvensIsLargerThan42(array) {
  return (
    array
      .filter((value) => {
        return value % 2 === 0;
      })
      .reduce((previous, current) => {
        return previous + current;
      }) >= 42
  );
}
