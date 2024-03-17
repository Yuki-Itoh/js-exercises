// `Object.assign()`と等価な関数 `assign()` を作成しなさい。
// 双方の関数が等価であることを確認するテストも作成しなさい。
// 少なくとも 6.7 節に記載された `Object.assign()` の仕様をカバーするテストケースを作成すること。

export function assign(target, ...sources) {
    // targetを別の変数にコピーする
    let obj = { ...target };

    for (let source of sources) {
        obj = { ...obj, ...source };
    }

    return obj;
}
