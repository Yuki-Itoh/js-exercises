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
  const table = new Array(rowLength);

  for (let row = 0; row < rowLength; row++) {
    // 列の初期化
    table[row] = new Array(rowLength);
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
  //TODO
}
