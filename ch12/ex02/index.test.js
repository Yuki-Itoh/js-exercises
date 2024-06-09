import { fibonacciSequenceGenerator, fibonacciSequenceIterator } from ".";

test("fibonacciSequence", () => {
  const gen = fibonacciSequenceGenerator();
  const ite = fibonacciSequenceIterator();

  for (let i = 0; i < 20; i++) {
    expect(ite.next()).toStrictEqual(gen.next());
  }
});
