// 文ブロックを使って同じ関数内に同じ変数名の const を複数宣言する関数を書きなさい。

function func() {
    const a = 1;
    {
        const a = 2;
        console.log(a); // => 2
    }
    console.log(a); // => 1
}

func();