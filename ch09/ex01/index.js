export class C {
  static C = C;
  static count = 0;
  static method() {
    return ++C.count;
  }

  C = C;
  method() {
    return C.method();
  }
}
