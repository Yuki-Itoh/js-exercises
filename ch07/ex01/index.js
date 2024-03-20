// 2次元配列を行列として扱い、行列の加算・乗算を行う関数を作成しなさい。

/**
 * matrix1とmatrix2を行列として扱い、加算した結果を返します。
 * @param {number[][]} matrix1
 * @param {number[][]} matrix2
 */
export function addMatrix(matrix1, matrix2) {
  const rowLength = matrix1.length;
  const colLength = matrix1[0].length;

  // 行の初期化
  const table = [];

  for (let row = 0; row < rowLength; row++) {
    // 列の初期化
    table[row] = [];
    for (let col = 0; col < colLength; col++) {
      table[row][col] = matrix1[row][col] + matrix2[row][col];
    }
  }

  return table;
}

/**
 * matrix1とmatrix2を行列として扱い、乗算した結果を返します。
 * @param {number[][]} matrix1
 * @param {number[][]} matrix2
 */
export function multiplyMatrix(matrix1, matrix2) {
  let table = [];
  for (let i = 0; i < matrix1.length; i++) {
    table[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix2.length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      table[i][j] = sum;
    }
  }
  return table;
}
