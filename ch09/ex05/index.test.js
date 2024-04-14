import { instanceOf } from ".";

class A {
  a = 1;
}

test("instanceOf", () => {
  const obj1 = new A();
  const obj2 = Object.create(obj1);
  obj2.b = 2;
  const obj3 = Object.create(obj2);
  obj3.c = 3;
  const obj4 = { d: 4 }; // 継承関係なし
  const emptyObj = {}; // 継承関係なし

  expect(instanceOf(obj1, A)).toEqual(obj1 instanceof A); // => true
  expect(instanceOf(obj2, A)).toEqual(obj2 instanceof A); // => true
  expect(instanceOf(obj3, A)).toEqual(obj3 instanceof A); // => true
  expect(instanceOf(obj4, A)).toEqual(obj4 instanceof A); // => false
  expect(instanceOf(emptyObj, A)).toEqual(emptyObj instanceof A); // => false
});
