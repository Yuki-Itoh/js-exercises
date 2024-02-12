// 初項と第 2 項を 1 とするフィボナッチ数列 (1, 1, 2, 3, ...) の最初の 10 個を返す関数を、while 文によるループを使って書きなさい。
// 同様に、do/while 文を使って書きなさい。
// 同様に、for 文を使って書きなさい。

// while
export function fib1(n) {
    let fibArray = [1, 1];
    let count = 0;
    while (count + 2 < n) {
        const nextValue = fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
        fibArray.push(nextValue);
        count++;
    }
    return fibArray[n - 1];
}

// do/while
export function fib2(n) {
    let fibArray = [1, 1];
    let count = 0;
    do {
        const nextValue = fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
        fibArray.push(nextValue);
    } while (count++ + 2 < n);
    return fibArray[n - 1];
}

// for
export function fib3(n) {
    let fibArray = [1, 1];
    for (let count = 0; count + 2 < n; count++) {
        const nextValue = fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1];
        fibArray.push(nextValue);
    }
    return fibArray[n - 1];
}
