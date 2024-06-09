// TODO: 120以上の素数への対応
export function* primeNumbers() {
  const primes = [];
  const isPrimes = Array(120).fill(true);
  isPrimes[0] = false;

  for (let i = 0; i < isPrimes.length; i++) {
    if (!isPrimes[i]) {
      continue;
    }

    // 素数を見つけたらリストに追加し、素数の倍数番目をfalseにする
    const prime = i + 1;
    primes.push(prime);
    let multiple = prime * 2;
    while (multiple <= isPrimes.length) {
      isPrimes[multiple - 1] = false;
      multiple += prime;
    }

    yield prime;
  }
}
