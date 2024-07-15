export function loggingProxy(obj) {
  const log = [];

  const handlers = {
    get(target, property, receiver) {
      if (typeof target[property] === "function") {
        return function (...args) {
          const date = new Date();
          log.push({
            date,
            property,
            args,
          });

          return target[property].apply(this, args);
        };
      }
      return Reflect.get(target, property, receiver);
    },
  };

  const proxy = new Proxy(obj, handlers);
  return { proxy, log };
}
