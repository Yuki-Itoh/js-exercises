## 問題

JavaScript/TypeScript の有名な日付操作の OSS リポジトリである[date-fns](https://github.com/date-fns/date-fns)、[Luxon](https://github.com/moment/luxon)、[Day.js](https://github.com/iamkun/dayjs)のそれぞれが、src ディレクトリ以下がどのようなまとまりでモジュール分割されているか分析して、それぞれ 2、3 段落程度で記述しなさい。

## 回答

- date-fns
  関数単位でディレクトリが分かれており、src/index.tsでまとめて再エクスポートしている。

- Luxon
  クラス単位でファイルが分かれており、src/luxon.jsでまとめて再エクスポートしている。

- Day.js
  utilsやconstantは別ファイルで定義しておき、src/index.jsで実装してエクスポートしている。
