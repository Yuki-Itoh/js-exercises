// 文字列中の改行コードを変換する関数とテストを作成しなさい。

// - `LF` -> `CR+LF`
// - `CR+LF` -> `LF`

export function convertLFtoCRLF(text) {
    return text.replace("\n", "\r\n");;
}

export function convertCRLFtoLF(text) {
    return text.replace("\r\n", "\n");
}