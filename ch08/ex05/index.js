export function sequenceToObject(...values) {
  if (values.length % 2 !== 0) {
    throw new Error();
  }

  const obj = {};
  for (let i = 0; i < values.length / 2; i++) {
    const key = values[i * 2];
    const value = values[i * 2 + 1];

    if (typeof key !== "string") {
      throw new Error();
    }
    obj[key] = value;
  }

  return obj;
}
