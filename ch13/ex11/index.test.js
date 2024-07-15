import { retryWithExponentialBackoff } from ".";

test("retryWithExponentialBackoff", async () => {
  // HTTPリクエストに成功する
  const successResp = await retryWithExponentialBackoff(() => false, 10);
  expect(successResp instanceof Response).toBe(true);

  // HTTPリクエストに失敗する
  const errResp = await retryWithExponentialBackoff(
    () => fetch("https:/s//example.com/"),
    5
  ).catch((e) => "err");
  expect(errResp).toBe("err");
}, 30000);
