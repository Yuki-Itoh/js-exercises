// 1. "月","火","水","木","金","土","日"のいずれかの文字列リテラルを受け取って、
// その曜日が完全週休二日制で休日であれば true、そうでなければ false を返すメソッドを書きなさい。
// if-else を使うバージョンと switch を使うバージョンの両方を作りなさい。
// 2. if-else を使う場合と switch を使う場合で、それぞれ可読性に対してどのようなメリットがあるか書きなさい。

const mon = "月";
const tue = "火";
const wed = "水";
const thu = "木";
const fri = "金";
const sat = "土";
const sun = "日";

export function isHoliday1(dayOfWeek) {
    if (dayOfWeek === sat || dayOfWeek === sun) { // if-elseを使うと複雑な条件を書くことができる
        return true;
    } else if (dayOfWeek === mon || dayOfWeek === tue || dayOfWeek === wed || dayOfWeek === thu || dayOfWeek === fri) {
        return false;
    } else {
        throw new Error(`dayOfWeek:${$dayOfWeek} is not supported.`);
    }
}

export function isHoliday2(dayOfWeek) {
    switch (dayOfWeek) { // switchを使うと、条件分岐が明確で条件漏れに気付きやすい。
        case sat:
        case sun:
            return true;
        case mon:
        case tue:
        case wed:
        case thu:
        case fri:
            return false;
        default:
            throw new Error(`dayOfWeek:${$dayOfWeek} is not supported.`)

    }
}
