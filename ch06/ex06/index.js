// 任意のオブジェクトを受け取り、そのオブジェクトのすべての独自プロパティ（列挙不可、プロパティ名が `Symbol`のものを含む）
// および列挙可能な継承プロパティのプロパティ名の配列を返す関数を作成しなさい。

export function getPropertiesOf(obj) {
    return Reflect.ownKeys(obj);
}
