/**
 * クイックソートアルゴリズムを用いてソートします。
 * @param {number[]} array
 * @returns
 */
export function quickSort(array) {
  if (array.length === 0) {
    return [];
  }

  const tail = array.slice(1);
  const smallerOrEqual = tail.filter((v) => v <= array[0]);
  const larger = tail.filter((v) => v > array[0]);
  return [...quickSort(smallerOrEqual), array[0], ...quickSort(larger)];
}

/**
 * 挿入ソート
 */
export function sort(
  array,
  compare = (lhs, rhs) => (lhs < rhs ? -1 : lhs > rhs ? +1 : 0)
) {
  // array[0 ... i-1] が常にソート済みになるように処理を進める
  // (0 <= j < i-1 に対して compare(array[j], array[j + 1]) <= 0 が成り立つ)
  for (let i = 1; i < array.length; i++) {
    const v = array[i];

    // array[i] を array[0 ... i] の適切な場所に挿入する
    let j = i;
    while (j > 0 && compare(array[j - 1], v) > 0) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = v;
  }
  return array;
}
