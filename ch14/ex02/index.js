export class MyArrayLike {
  constructor(length) {
    this.length = length;
  }
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  static get [Symbol.species]() {
    return MyArrayLike;
  }
}
