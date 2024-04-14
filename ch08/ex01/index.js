export const f = (n, c) =>
  // 関数式の関数本体はreturn文のみのため、中括弧・returnキーワードは省略可
  [...Array(n)].map(() => {
    // map()の引数の関数は2行のため中括弧・returnキーワードは省略不可
    console.log(c);
    return c;
  });

// 引数が一つで関数本体もreturn文のみなので、丸括弧・中括弧・returnキーワードは省略可
export const g = (x) => x ** 2;

// 引数はないので丸括弧は省略不可。
// 関数本体はreturn文のみだが、オブジェクトリテラルの中括弧があるので丸括弧が必要。
export const h = () => ({ now: new Date().getTime() });
