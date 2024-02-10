
// - `if` を利用せず `&&` や `||` を用いて `maxWidth` や `maxHeight` を設定する関数 (`resize1`)
function resize1(params) {
    let maxWidth = params && params.maxWidth || 600;
    let maxHeight = params && params.maxHeight || 480;

    console.log({ maxWidth, maxHeight });
}

// - `if` を利用せず `?.` や `??` を用いて `maxWidth` や `maxHeight` を設定する関数 (`resize2`)
function resize2(params) {
    let maxWidth = params?.maxWidth ?? 600;
    let maxHeight = params?.maxHeight ?? 480;

    console.log({ maxWidth, maxHeight });
}
