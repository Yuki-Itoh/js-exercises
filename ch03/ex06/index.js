// 以下の文字列メソッドと同等の結果を返す関数を自作しなさい。

// - `substring`
// - `slice`
// - `padStart`
// - `trim`

// 各関数は第一引数に対象の文字列を受け取り、第二引数以降に元のメソッドの第一引数以降を受け取るものとする。

// [ex06/index.test.js](./ex06/index.test.js) のテストを全てパスするように index.js (または index.ts) を作成しなさい。

export function substring(str, indexStart, indexEnd) {
  const start = Number.isNaN(indexStart) || indexStart === undefined || indexStart < 0
    ? 0
    : indexStart > str.length
      ? str.length
      : Math.floor(indexStart);
  const end = Number.isNaN(indexEnd) || indexEnd < 0
    ? 0
    : indexEnd === undefined || indexEnd > str.length
      ? str.length
      : Math.floor(indexEnd);

  const startEnd = [start, end]
  startEnd.sort(function (a, b) {
    return a - b;
  })

  let text = "";
  for (let i = startEnd[0]; i < startEnd[1]; i++) {
    text += str[i];
  }

  return text;
}

export function slice(str, indexStart, indexEnd) {
  const start = Number.isNaN(indexStart) || indexStart === undefined || indexStart + str.length < 0
    ? 0
    : indexStart > str.length
      ? str.length
      : indexStart < 0
        ? Math.floor(indexStart) + str.length
        : Math.floor(indexStart);
  const end = Number.isNaN(indexEnd) || indexEnd + str.length < 0
    ? 0
    : indexEnd === undefined || indexEnd > str.length
      ? str.length
      : indexEnd < 0
        ? Math.floor(indexEnd) + str.length
        : Math.floor(indexEnd);

  let text = "";
  for (let i = start; i < end; i++) {
    text += str[i];
  }

  return text;
}

export function padStart(str, targetLength, padString) {
  if (targetLength <= str.length) {
    return str;
  }

  const pad = padString !== undefined
    ? padString
    : " ";

  const padCount = targetLength - str.length
  const padding = pad.repeat(Math.ceil(padCount / pad.length)).substring(0, padCount)

  return padding + str;
}

export function trim(str) {
  // 先頭の空白文字の繰り返し(^\s+)もしくは末尾の空白文字の繰り返し(\s+$)の全て(/g)を検出する正規表現
  const trimRegex = /(^\s+|\s+$)/g;

  return str.replace(trimRegex, '');
}
