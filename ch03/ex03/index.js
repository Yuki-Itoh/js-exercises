
export function equal(a, b) {
    const numericalError = 1e-10; // 許容誤差
    return Math.abs(a - b) < numericalError;
}
