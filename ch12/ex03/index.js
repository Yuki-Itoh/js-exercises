export function* counterGenerator() {
  let count = 0;
  for (;;) {
    try {
      yield ++count;
    } catch (e) {
      count = 0;
    }
  }
}
