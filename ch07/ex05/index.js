export function pop(seq) {
  const copy = [...seq];
  copy.pop();
  return copy;
}

export function push(seq, ...items) {
  const copy = [...seq];
  copy.push(...items);
  return copy;
}

export function shift(seq) {
  const copy = [...seq];
  copy.shift();
  return copy;
}

export function unshift(seq, ...items) {
  const copy = [...seq];
  copy.unshift(...items);
  return copy;
}

export function sort(seq, compareFn) {
  const copy = [...seq];
  copy.sort(compareFn);
  return copy;
}

const seq = [1, 2, 3, 4, 5];

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
