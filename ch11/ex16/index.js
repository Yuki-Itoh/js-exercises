export function retryWithExponentialBackoff(func, maxRetry, callback) {
  let retryCount = 0;

  const retry = async (timeout) => {
    setTimeout(() => {
      const result = func();
      if (result) {
        return callback(result);
      }

      if (++retryCount > maxRetry) {
        return callback(result);
      }

      if (retryCount === 1) {
        retry(1000);
      } else {
        retry(timeout * 2);
      }
    }, timeout);
  };

  retry(0);
}
