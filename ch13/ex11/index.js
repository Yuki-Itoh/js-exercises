import { wait } from "../util/utils.js";

export async function retryWithExponentialBackoff(func, maxRetry) {
  let isRetry = true;
  let retryCount = 0;
  let waitingTime = 10; // テスト時間が伸びないように10msとする

  /**
   * ※実装が間違っている※
   * async関数の中ではnew Promiseは不要。そのままreturnしたりthrow Errorしたりすればよい。
   */
  return new Promise(async (resolve, reject) => {
    while (isRetry) {
      console.log(
        `count=${retryCount}, isRetry=${isRetry}, waiting=${waitingTime}`
      );
      await func()
        .then((response) => {
          console.log(`response=${response}`);
          resolve(response);
          isRetry = false;
        })
        .catch((err) => {
          if (retryCount >= maxRetry) {
            reject(err);
            isRetry = false;
          }
        });

      await wait(waitingTime);
      waitingTime *= 2;
      retryCount++;
    }
  });
}
