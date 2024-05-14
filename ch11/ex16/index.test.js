import { retryWithExponentialBackoff } from ".";
import { jest } from "@jest/globals";

test("maxRetry回までにfuncがtrueを返す", (done) => {
  let count = 0;
  const mock = jest.fn();
  const func = () => {
    mock();
    count++;
    console.log(`func has been called ${count} times.`);
    return count >= 3;
  };
  const callback = (result) => {
    expect(result).toBe(true);
    expect(mock).toHaveBeenCalledTimes(3);
    done();
  };

  retryWithExponentialBackoff(func, 5, callback);
}, 60000);

test("maxRetry回リトライしても成功せずに修了する", (done) => {
  let count = 0;
  const mock = jest.fn();
  const func = () => {
    mock();
    count++;
    console.log(`func has been called ${count} times.`);
    return count >= 5;
  };
  const callback = (result) => {
    expect(result).toBe(false);
    expect(mock).toHaveBeenCalledTimes(4); // 初回＋リトライ3回
    done();
  };

  retryWithExponentialBackoff(func, 3, callback);
}, 60000);
