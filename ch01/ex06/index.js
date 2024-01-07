
export function fib(x) {
    let fibArray = [0, 1]
    while (x > 1) {
        let nextValue = fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
        fibArray.push(nextValue);
        x--;
    }
    return fibArray[fibArray.length - 1]
}
