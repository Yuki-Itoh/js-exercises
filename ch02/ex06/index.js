
export function fizzbuzz() { let text = ""; for (var i = 1; i <= 100; i++) { if (i % 3 == 0 && i % 5 == 0) { text += "FizzBuzz\n" } else if (i % 3 == 0) { text += "Fizz\n" } else if (i % 5 == 0) { text += "Buzz\n" } else { text += i + "\n" } } return text }
