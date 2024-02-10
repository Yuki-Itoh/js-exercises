// 与えられた数値を 32 ビット整数表現形式で表現した場合に 1 であるビットの数を返す関数 `bitCount` を書きなさい。

// 例として `bitCount(0b111)` は 3 を返し、`bitCount(0b1111111111111111111111111111111)` は `31` を返しなさい。

export function bitCount(num) {
    const str = num.toString(2);
    let count = 0;

    // 一文字ずつ'1'かどうか確認する
    for (let c of str) {
        if (c === '1') {
            count++;
        }
    }
    return count;
}
