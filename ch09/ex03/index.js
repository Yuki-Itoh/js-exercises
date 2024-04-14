export class C {
  #x = 42;

  getX() {
    return this.#x;
  }
}

export class C2 {
  getX() {
    const x = 42;
    return x;
  }
}
