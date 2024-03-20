export function reverse(str) {
  if (typeof str !== "string") {
    throw new Error();
  }

  let array = [];
  let needCombine = false;
  for (let char of str) {
    const lastChar = array[array.length - 1];

    if (needCombine) {
      // 最後の文字に結合する
      array[array.length - 1] = lastChar + char;
      needCombine = false;
      continue;
    }

    const zwj = "\u200D"; // ゼロ幅接合子
    if (char === zwj) {
      // ゼロ幅結合子であれば、次の文字の結合を予約する
      needCombine = true;
      array[array.length - 1] = lastChar + char;
      continue;
    } else {
      array.push(char);
    }
  }

  return array.reverse().join("");
}
