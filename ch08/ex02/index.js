export function powByRecursive(x, n) {
  if (n <= 0) return 1;
  if (n <= 1) return x;
  return x * powByRecursive(x, n - 1);
}

export function powByLoop(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
