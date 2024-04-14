function f(input) {
  // ${input}の前後にダブルクオーテーションが付いていないため、eval()でReferenceErrorが発生する
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

f("Ito");
