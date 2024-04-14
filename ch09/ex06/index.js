export class TypedMap {
  constructor(keyType, valueType, entries) {
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
        }
      }
    }

    this.map = new Map(entries);
    this.keyType = keyType;
    this.valueType = valueType;
  }

  set(key, value) {
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }

    this.map.set(key, value);
    return this;
  }

  clear() {
    this.map.clear();
  }

  delete(key) {
    return this.map.delete(key);
  }

  entries() {
    return this.map.entries();
  }

  forEach(callbackfn, thisArg) {
    return this.map.forEach(callbackfn, thisArg);
  }

  get(key) {
    return this.map.get(key);
  }

  has(key) {
    return this.map.has(key);
  }

  keys() {
    return this.map.keys();
  }

  get size() {
    return this.map.size;
  }

  values() {
    return this.map.values();
  }
}
