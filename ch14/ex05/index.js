const a = `${"AB"}`;

export function templateLiteral(strings, ...values) {
  const types = values.map((v) => typeof v);

  let result = strings[0];
  for (let i = 0; i < types.length; i++) {
    result += types[i] + strings[i + 1];
  }

  return result;
}
