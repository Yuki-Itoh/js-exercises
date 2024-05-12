import { lastDayOf, weekdayCountIn, weekdayOf } from ".";

test("lastDayOf", () => {
  expect(lastDayOf(2024, 5)).toBe(31);
  expect(lastDayOf(2024, 2)).toBe(29);
  expect(lastDayOf(2023, 2)).toBe(28);
});

test("weekdayCountIn", () => {
  expect(weekdayCountIn("2024-05-01", "2024-05-31")).toBe(23);
  expect(weekdayCountIn("2024-01-01", "2024-12-31")).toBe(262);
});

test("weekdayOf", () => {
  expect(weekdayOf("2024-05-01", "en-US")).toBe("Wednesday");
  expect(weekdayOf("2024-05-01", "de-DE")).toBe("Mittwoch");
  expect(weekdayOf("2024-05-01", "ja-JP")).toBe("水曜日");
});
