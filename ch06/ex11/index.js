// 極座標 `r` と `theta` をプロパティにもち、ゲッターとセッターをもつ読み書き可のアクセサプロパティとしてデカルト座標 `x` と `y` をもつオブジェクトを実装しなさい。
// セッターメソッドにおいて `x` と `y` それぞれに `NaN` が設定される場合にはエラーにしなさい。

export const obj = {
  r: 0,
  theta: 0,
  significantDigits: 10, // 小数点以下の有効桁数

  get x() {
    const x = this.r * Math.cos(this.theta);
    return Math.round(x * 10 ** 10) / 10 ** 10;
  },
  set x(value) {
    if (isNaN(value)) throw new Error();
    const y = this.r * Math.sin(this.theta);
    this.r = Math.hypot(value, y);
    this.theta = Math.atan2(y, value);
  },
  get y() {
    const y = this.r * Math.sin(this.theta);
    return Math.round(y * 10 ** 10) / 10 ** 10;
  },
  set y(value) {
    if (isNaN(value)) throw new Error();
    const x = this.r * Math.cos(this.theta);
    this.r = Math.hypot(x, value);
    this.theta = Math.atan2(value, x);
  },
};
