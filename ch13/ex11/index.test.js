import { retryWithExponentialBackoff } from ".";

test("retryWithExponentialBackoff", async () => {
  // HTTPリクエストに成功する
  const successResp = await retryWithExponentialBackoff(
    () => fetch("https://example.com"),
    5
  );
  expect(successResp instanceof Response).toBe(true);

  // HTTPリクエストに失敗する
  const errResp = await retryWithExponentialBackoff(
    () => fetch("https:/s//example.com/"),
    5
  ).catch((e) => "err");
  expect(errResp).toBe("err");
}, 30000);
