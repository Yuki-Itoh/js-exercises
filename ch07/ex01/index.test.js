import { addMatrix, multiplyMatrix } from ".";

test.each([
  {
    matrix1: [
      [1, 2],
      [3, 4],
    ],
    matrix2: [
      [1, 2],
      [3, 4],
    ],
    expected: [
      [2, 4],
      [6, 8],
    ],
  },
])("addMatrix $#", ({ matrix1, matrix2, expected }) => {
  expect(addMatrix(matrix1, matrix2)).toStrictEqual(expected);
});

test.each([
  {
    matrix1: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    matrix2: [
      [7, 8],
      [9, 10],
      [11, 12],
    ],
    expected: [
      [58, 64],
      [139, 154],
    ],
  },
])("multiplyMatrix $#", ({ matrix1, matrix2, expected }) => {
  expect(multiplyMatrix(matrix1, matrix2)).toStrictEqual(expected);
});
