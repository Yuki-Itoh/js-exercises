export class Hiragana {
  constructor(char) {
    this.char = char;
    this.codeUnit = char.charCodeAt(0);
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "string":
        return this.char;
      case "number":
        return this.codeUnit;
      default:
        return this.char;
    }
  }
}
