// `for` 文を使って、任意のオブジェクトのプロパティ名の一覧、値の一覧をそれぞれ出力しなさい。

const obj = { a: 1, b: 2 }

for (let property in obj) {
    console.log(property); // プロパティ名
    console.log(obj[property]); // 値
}