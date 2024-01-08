// 数値型のプロパティを持つオブジェクト `obj1(例： {x: 1})` を作成しなさい。
// 続いて、作成済みの `obj1` に、プロパティを追加できることを確認しなさい`(例： y: 2 を obj1 に追加)`。

// 更に、`obj1` と同じプロパティ内容`{例: {x:1, y:2}}` のオブジェクト `obj2` を新規作成し、`obj1` と `obj2` を`===` で比較し結果を確認しなさい。

// 最後に、`obj1` と `obj2` を引数にとり、２つのオブジェクトが同じ内容なら、別オブジェクトでも `true` を返す関数 `equals` を作成しなさい。
// `equals` はテストコードも作成しなさい。

export function equals(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let property in obj1) {
        // TODO: deep equals
        if (obj1[property] !== obj2[property]) return false;
    }

    return true;
}
