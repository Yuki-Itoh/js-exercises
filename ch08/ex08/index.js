export function counterGroup() {
  let total = 0;

  function counter() {
    let n = 0;
    return {
      count: function () {
        total++;
        return n++;
      },
      reset: function () {
        n = 0;
      },
    };
  }

  return {
    newCounter: function () {
      return counter();
    },
    total: function () {
      return total;
    },
  };
}
