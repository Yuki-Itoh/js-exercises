/**
 * 指定された年・月の日数を返します。
 * @param {number} year 年
 * @param {number} month 月
 * @returns 日数
 */
export function lastDayOf(year, month) {
  return new Date(year, month, 0).getDate();
}

/**
 * 開始日と終了日の期間の平日の日数を返します。
 * @param {string} start 開始日('YYYY-MM-DD')
 * @param {string} end 終了日('YYYY-MM-DD')
 */
export function weekdayCountIn(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  let count = 0;
  for (
    let currentDate = startDate;
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    const day = currentDate.getDay();
    if (day !== 6 && day !== 0) {
      count++;
    }
  }

  return count;
}

/**
 * dateの曜日をlocaleの形式で返します。
 * @param {string} date 日付('YYYY-MM-DD')
 * @param {*} locale ロケール
 * @returns ロケールの形式の曜日
 */
export function weekdayOf(dateString, locale) {
  return new Date(dateString).toLocaleDateString(locale, { weekday: "long" });
}

export function firstDayOfLastMonth() {
  const date = new Date();
  //TODO getMonth, setMonthを使わずに実装する
  date.setMonth(date.getMonth() - 1);

  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0);
}
