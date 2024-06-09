// イテレータ
const iter1 = counterIter(5);
for (let value of iter1) {
  // 最初にSymbol.iteretor()が呼ばれ、その後ループの度にnextが呼ばれる
  console.log(value);
}

const iter2 = counterIter(5);
for (let result = iter2.next(); !result.done; result = iter2.next()) {
  // 最初にSymbol.iteretor()が呼ばれず、その後ループの度にnextが呼ばれる
  console.log(result.value);
}

const iter3 = counterIter(5);
for (let value of iter3) {
  console.log(value);

  if (value === 3) {
    break; // breakの際にイテレータのreturnが呼ばれる
  }
}

try {
  iter3.throw(Error(""));
} catch (e) {}

// ジェネレータ
const gen = counterGen(5);
gen.next();
gen.return();
try {
  gen.throw(Error());
} catch (e) {}

const gen1 = counterGen(5);
for (let value of gen1) {
  console.log(value); // ループの回数分nextログが出力され、最終的にfinnalyログが出力される。
}

console.log("finish");

// -----------------------------------------------------
function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
  } finally {
    console.log("counterGen: finally");
  }
}
