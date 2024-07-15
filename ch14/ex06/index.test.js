import { loggingProxy } from ".";

test("proxy", () => {
  const obj = {
    func() {
      return "func";
    },
    sum(num1, num2) {
      return num1 + num2;
    },
  };

  const { proxy, log } = loggingProxy(obj);
  proxy.func();
  proxy.sum(1, 2);
  const date = new Date();

  expect(log).toStrictEqual([
    {
      date: date,
      property: "func",
      args: [],
    },
    {
      date: date,
      property: "sum",
      args: [1, 2],
    },
  ]);
});
