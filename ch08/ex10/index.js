export function addMyCall(f) {
  const myCall = function (o, ...args) {
    o.m = f;
    const result = o.m(...args);
    delete o.m;
    return result;
  };
  f.myCall = myCall;
}
