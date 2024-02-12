// 以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

let x = 0;

for (let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break; // finallyの処理が優先され、breakしない
    } finally {
        continue;
    }
}

console.log(x);