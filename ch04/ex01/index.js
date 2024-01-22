// 実部と虚部をプロパティとして持つ 2 つの複素数オブジェクトを引数として四則演算の結果を返す関数 `add`、`sub`、`mul`、`div` を実装しなさい。

/**
 * 複素数を表すクラス
 */
export class Complex {
    /**
     * 複素数を生成します
     * @param {number} real 実部
     * @param {number} imaginary 虚部
     */
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}

/**
 * 複素数を加算します
 * @param {Complex} a 
 * @param {Complex} b 
 */
export function add(a, b) {
    return new Complex(a.real + b.real, a.imaginary + b.imaginary);
}

/**
 * 複素数を減算します
 * @param {Complex} a 
 * @param {Complex} b 
 * @returns 
 */
export function sub(a, b) {
    return new Complex(a.real - b.real, a.imaginary - b.imaginary);
}

/**
 * 複素数を乗算します
 * @param {Complex} a 
 * @param {Complex} b 
 * @returns 
 */
export function mul(a, b) {
    return new Complex(a.real * b.real - a.imaginary * b.imaginary, a.real * b.imaginary + a.imaginary * b.real);
}

/**
 * 複素数を除算します
 * @param {Complex} a 
 * @param {Complex} b 
 * @returns 
 */
export function div(a, b) {
    const denominator = b.real ** 2 + b.imaginary ** 2; // 分母
    const real = (a.real * b.real + a.imaginary * b.imaginary) / denominator; // 実部
    const imaginary = (a.imaginary * b.real - a.real * b.imaginary) / denominator; // 虚部
    return new Complex(real, imaginary);
}
