export function f(func) {
  const pattern = /\$(10|[1-9])/g;
  const args = func.match(pattern);
  const funcBody = func.includes("return") ? func : "return " + func;

  if (args) {
    return new Function(...args, funcBody);
  } else {
    return new Function(funcBody);
  }
}
