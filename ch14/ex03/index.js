export class IgnoreAccentPattern {
  constructor(glob) {
    this.glob = glob;

    if (typeof glob === "string") {
      const removed = this.#removeDiacriticalMarks(glob);
      this.regexp = new RegExp(`${removed}`, "u");
    } else if (glob instanceof RegExp) {
      const removed = this.#removeDiacriticalMarks(glob.source);
      this.regexp = new RegExp(removed, glob.flags);
    }
  }

  toString() {
    return this.glob;
  }

  [Symbol.search](s) {
    return this.#removeDiacriticalMarks(s).search(this.regexp);
  }
  [Symbol.match](s) {
    return this.#removeDiacriticalMarks(s).match(this.regexp);
  }
  [Symbol.replace](s, replacement) {
    return s.replace(this.regexp, replacement);
  }

  /**
   * 合成可能なダイアクリティカルマークをstrから取り除きます。
   * @param {} str
   * @returns ダイアクリティカルマークを取り除いた文字列
   */
  #removeDiacriticalMarks(str) {
    const normalized = str.normalize("NFD");
    return normalized.replace(/[\u0300-\u036f]/g, "");
  }
}
