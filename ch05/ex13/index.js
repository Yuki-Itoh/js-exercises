// 呼び出されるごとに次のフィボナッチ数を返すジェネレータ関数を、yield 文を使って書きなさい。
// すなわち、1 回目と 2 回目の呼び出しに対しては 1 を返し、3 回目の呼び出しに対しては 2 を返します。

function* fibonacciSequence() {
    let x = 0, y = 1;
    for (; ;) {
        yield y;
        [x, y] = [y, x + y];
    }
}

const fib = fibonacciSequence();

// フィボナッチ数を10個ログ出力する
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}
