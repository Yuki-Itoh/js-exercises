// 以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

function f() {
    try {
        return true; // returnする前に必ずfinallyが実行され、finallyのreturn文が優先される。
    } finally {
        return false;
    }
}

console.log(f());