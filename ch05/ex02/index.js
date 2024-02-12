// 文字列のパラメータを取り、制御文字など文字列リテラル作成時エスケープシーケンスで記述する必要がある文字 (p37 表 3-1 の`\\`より上)を、
// エスケープシーケンスに変換した文字列を返すメソッドを書きなさい。
// 例えば文字列中に`\`が含まれていたら、`\\`に変換しなさい。if-else で分岐するバージョンと switch で分岐するバージョンの両方を作りなさい。

const nul = '\u0000';
const b = '\u0008';
const t = '\u0009';
const n = '\u000A';
const v = '\u000B';
const f = '\u000C';
const r = '\u000D';
const d = '\u0022'; // 二重引用符
const a = '\u0027'; // 単一引用符(アポストロフィー)
const backslash = '\u005C';

export function toEscape1(text) {
    if (typeof text !== 'string') {
        return text;
    }

    let replacedText = '';
    for (let letter of text) {
        if (letter === nul || letter === b || letter === t || letter === n || letter === v
            || letter === f || letter === r || letter === d || letter === a || letter === backslash) {
            replacedText += backslash;
        }
    }

    return replacedText;
}

export function toEscape2(text) {
    if (typeof text !== 'string') {
        return text;
    }

    let replacedText = '';
    for (let letter of text) {
        switch (letter) {
            case nul:
            case b:
            case t:
            case n:
            case v:
            case f:
            case r:
            case d:
            case a:
            case backslash:
                replacedText += backslash;
                break;
            default: break;
        }
    }

    return replacedText;
}