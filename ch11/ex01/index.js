export class TypeMap {
  #map = new Map();
  #primitiveTypes = ["string", "number", "bigint", "boolean"];

  get(key) {
    return this.#map.get(key);
  }
  set(key, value) {
    if (value instanceof key) {
      this.#map.set(key, value);
      return this;
    }

    // valueがkeyのインスタンスでもプリミティブ型でもない場合はエラーを返す。
    if (!this.#primitiveTypes.includes(typeof value)) {
      throw Error(`${value} is not instanceof ${key}`);
    }

    try {
      if (key(value) === value) {
        this.#map.set(key, value);
        return this;
      } else {
        throw Error(`Unsupported arguments: key=${key}, value=${value}`);
      }
    } catch {
      throw Error(`Unsupported arguments: key=${key}, value=${value}`);
    }
  }
}
