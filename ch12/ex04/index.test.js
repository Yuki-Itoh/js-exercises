import { primeNumbers } from ".";

test("primeNumbers", () => {
  const gen = primeNumbers();
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

  for (let prime of primes) {
    expect(gen.next().value).toEqual(prime);
  }
});
