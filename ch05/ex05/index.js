// {a: 1, b: 2, c: 3} のような値が数値のオブジェクトを引数にとり、
// 値が偶数のプロパティだけを持ち(つまり奇数は取り除かれた)オブジェクトを返す書きなさい。
// 例えば{a: 1, b: 2, c: 3}であれば、{b: 2}を返しなさい。

export function removeOdd(obj) {
    for (let key in obj) {
        if (obj[key] % 2 === 1) {
            // 値が奇数のプロパティを取り除く
            delete obj[key];
        }
    }

    return obj;
}
