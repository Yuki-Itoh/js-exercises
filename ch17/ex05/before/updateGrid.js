import { COLS, ROWS } from './constants.js';

// Life Game のルールに従ってセルを更新する
export function updateGrid(grid) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する (実装してね)
      let alives = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          if (row + i < 0 || col + i < 0 || row + i >= ROWS || col + i >= COLS)
            continue;
          if (grid[row + i][col + i]) {
            alives++;
          }
          const r = row + i;
          const c = col + j;

          if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
            alives += grid[r][c] ? 1 : 0;
          }
        }
      }

      if (grid[row][col]) {
        // 現在生きている場合
        if (alives < 2 || alives > 3) {
          nextGrid[row][col] = false;
        }
      } else {
        // 現在死んでいる場合
        if (alives === 3) {
          nextGrid[row][col] = true;
        }
      }
    }
  }
  return nextGrid;
}
