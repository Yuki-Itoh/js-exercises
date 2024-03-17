import { addMatrix } from ".";

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

// test.each([
//     {
//       matrix1: [
//         [1, 2],
//         [3, 4],
//       ],
//       matrix2: [
//         [1, 2],
//         [3, 4],
//       ],
//       expected: [
//         [2, 4],
//         [6, 8],
//       ],
//     },
//   ])("multiplyMatrix $#", ({ matrix1, matrix2, expected }) => {
//     expect(addMatrix(matrix1, matrix2)).toStrictEqual(expected);
//   });
