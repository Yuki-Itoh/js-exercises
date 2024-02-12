// オブジェクトのプロパティアクセスで、`with`を使用した場合と使用しない場合での速度をそれぞれ計測しなさい。

/**
 * 引数で渡された処理の実行時間を計測します。
 * @param {function} func 
 * @returns 
 */
function measureTimeOf(func) {
    if (typeof func !== 'function') {
        return;
    }

    const start = Date.now();
    func();
    const end = Date.now();
    const time = end - start;

    console.log(`measured time: ${time}`);
}

measureTimeOf(() => {
    with (Number) {
        for (let i = 0; i < 100; i++) {
            console.log(MAX_SAFE_INTEGER);
        }
    }
}) // => 18ms

measureTimeOf(() => {
    for (let i = 0; i < 100; i++) {
        console.log(Number.MAX_SAFE_INTEGER);
    }
}) // => 12ms