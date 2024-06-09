export function sortJapanese(array) {
  return array.sort(Intl.Collator("jp-JP").compare);
}

export function toJapaneseDateString(date) {
  return Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
    year: "2-digit",
    month: "long",
    day: "2-digit",
  }).format(date);
}
