// 次の条件を満たすオブジェクトを作成し、for/in ループで順番を確認しなさい。

// - プロトタイプを一つ以上もつ
// - プロトタイプと同名と同名でない数字、文字列のプロパティをもつ
// - プロトタイプはオブジェクトと同名ではない数字、文字列のプロパティももつ
// - プロトタイプは列挙可のプロパティをもち、それと同名の列挙不可のプロパティをオブジェクトにもたせること

const o = {
    num: 1,
    str: "str",
    enumerable: "enumerable"
};

const p = Object.create(o);
p.num2 = 2;
p.str2 = "str2";
Object.defineProperty(p, "enumerable", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: "nonEnumerable",
});

/**
 * num2→str2→num→strの順にログ出力される。
 * つまり優先度は以下である。
 * - オブジェクト > プロトタイプ
 * - number > string
 * 
 * また、列挙不可としてオーバーライドしたプロパティの方が優先される。
 */
for (let key in p) {
    console.log(key);
}
